const osmosis = require('osmosis');
const _ = require('lodash');
const fs = require('fs');

const baseUrl = `https://m.yad2.co.il`;
const yad2searchUrl = `/feed/2/2/`;
const minRooms = 1;
const maxRooms = 1;
const minPrice = 1500;
const maxPrice = 4000;
const priceAndSize = `&fromRooms=${minRooms}&toRooms=${maxRooms}&fromPrice=${minPrice}&toPrice=${maxPrice}`;
const location = `location_type=3&area=47`;
const otherOptions = `&priceOnly=1&imgOnly=1`;
const query = location + priceAndSize + otherOptions;
const url = baseUrl + yad2searchUrl + query;

osmosis.config('follow', 0)

osmosis.config('user_agent', `Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25`)

const handleErrors = (err) => {if (err) throw err;}
fs.writeFileSync('./housing.json','[', handleErrors);

osmosis
    .get(url)
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
        data.url = context.__location.url.href;
        next(context, data);
    })
    .data(function (listing) {
        if(_.has(listing,'latlon')){
            // console.log(listing.latlon);
            const extractedLocation = listing.latlon.match(/=(\d+).(\d+),(\d+).(\d+)/);
        if(_.has(extractedLocation, [1]) && !_.isNil(extractedLocation[1])) {
            _.set(listing,'latlon', `${extractedLocation[1]}.${extractedLocation[2]},${extractedLocation[3]}.${extractedLocation[4]}`);
            // console.log(listing.latlon);
            const price = _.parseInt(listing.price.split(',').join('').slice(0,-2));
            _.set(listing,'price', price);
            // _.set(listing,'price', normalizeValue(price, minPrice, maxPrice));
            console.log(listing);
            fs.appendFile('./housing.json', `[${listing.latlon},${listing.price},"${listing.url}"],`, {encoding: 'utf8'}, handleErrors);
        }}
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)
    .then(() =>{
        const middle = fs.readFileSync('./housing.json', {encoding: 'utf8'});
        const cleanMiddle = _.trimEnd(middle, ',');
        const toWrite = `
            let housingPrices = ${cleanMiddle}];
        `;
        fs.writeFile('rentalData.js', toWrite, handleErrors);
    })

// https://stackoverflow.com/a/39777131
// function normalizeValue(val, max, min) { return (val - min) / (max - min); }