var osmosis = require('osmosis');
var _ = require('lodash');

const baseUrl = `https://m.yad2.co.il`;
const yad2searchUrl = `/feed/2/2/`;
const query = `location_type=3&area=2&fromRooms=1&toRooms=2&fromPrice=2000&toPrice=3000&airConditioner=1&renovated=1&priceOnly=1&imgOnly=1`;
const url = baseUrl + yad2searchUrl + query;

const flipHebrew = (hebrew) => {
    if(_.isString(hebrew)){
        return _.reverse(hebrew.split('')).join('')
    } else {
        return '32.0806761,34.8200468';
    }
};

osmosis.config('follow', 0)

osmosis.config('user_agent', `Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25`)

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
    .data(function (listing) {
        // do something with listing data
        const flipped = _.mapValues(listing, flipHebrew);
        const mostlyFlipped = _(flipped)
            .set('price', 
                _.parseInt(flipHebrew(flipped.price)
                .split(',')
                .join('')
                .slice(0,-2))
            )
            .set('latlon', 
                flipHebrew(flipped.latlon)
                .match(/\d\d[^\&]+/)[0]
            )
            .set('sqm', 
                _.parseInt(flipHebrew(flipped.sqm)
                .match(/\d+/)[0])
            )
            .value();
        console.log(mostlyFlipped);
    })
    .error(console.log)
    .debug(console.log)