const osmosis = require('osmosis');
const _ = require('lodash');
const {URL} = require('url');
const fs = require('fs');

const handleErrors = (err) => {if (err) throw err;}

const Database = require('better-sqlite3');
const db = new Database('rentals.db');
const stmt = db.prepare('CREATE TABLE IF NOT EXISTS rentals (url TEXT PRIMARY KEY, price INTEGER, latlon TEXT)').run();

const createYad2Link = (location, minPrice = 1500, maxPrice = 3393, minRooms = 1, maxRooms = 2) => {
    const baseUrl = `https://m.yad2.co.il`;
    const yad2searchUrl = `/feed/2/2/`;
    const otherOptions = `&priceOnly=1&imgOnly=1`;
    const priceAndSize = `&fromRooms=${minRooms}&toRooms=${maxRooms}&fromPrice=${minPrice}&toPrice=${maxPrice}`;
    const query = location + priceAndSize + otherOptions;
    const url = new URL(baseUrl + yad2searchUrl + query).href;
    return url;
}

osmosis.config('follow', 0)

osmosis.config('user_agent', `Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25`)

const searchForApartmentsInLocation = (location = `location_type=3&area=47`) => {
return osmosis
    .get(createYad2Link(location))
    .paginate('#ad_feed_pagination_item_next_icon')
    .follow('[id^=ad_feed_ad_item_link]')
    .set({
        'muni': '.ad_page_item_header_main_title',
        'street': '.ad_page_item_header_second_title',
        'latlon': '.ad_page_item_header_navigation_info_link:nth(1)@href',
        'description': '.ad_page_item_info_text_holder',
        'price': '.ad_page_item_price',
        'rooms': '.ad_page_item_info_bar_item_title:nth(0)',
        'floor': '.ad_page_item_info_bar_item_title:nth(1)',
        'sqm': '.ad_page_item_info_bar_item_title:nth(2)'
    })
    .then(function(context, data, next) {
        data.url = new URL(context.__location.url.href);
        next(context, data);
    })
    .data(function (listing) {
        if(_.has(listing,'latlon')){
            const extractedLocation = listing.latlon.match(/=(\d+).(\d+),(\d+).(\d+)/);
        if(_.has(extractedLocation, [1]) && !_.isNil(extractedLocation[1])) {
            _.set(listing,'latlon', `${extractedLocation[1]}.${extractedLocation[2]},${extractedLocation[3]}.${extractedLocation[4]}`);
            const price = _.parseInt(listing.price.split(',').join('').slice(0,-2));
            _.set(listing,'price', price);
            const newRow = db.prepare(`INSERT OR REPLACE INTO rentals (url, price, latlon) VALUES ("${listing.url.href}", ${listing.price}, "${listing.latlon}")`).run();
        }}
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
}
searchForApartmentsInLocation();
searchForApartmentsInLocation(`location_type=3&area=3`);

// write out json
const fileLocation = './rentalData.js';

fs.writeFileSync(fileLocation, 'let housingPrices = [', handleErrors);

const allDBRows = db.prepare(`SELECT * from rentals ORDER BY price desc`).all()

allDBRows.forEach((listing, index) => {
    const arrayItem = `,[${listing.latlon},${listing.price},"${listing.url}"]`;
    let append;
    if (index === 0) {
        append = _.trimStart(arrayItem, ',');
    } else {
        append = arrayItem;
    }
    fs.appendFile(fileLocation, append, {encoding: 'utf8'}, handleErrors)
});

fs.appendFile(fileLocation, `];`, handleErrors);
