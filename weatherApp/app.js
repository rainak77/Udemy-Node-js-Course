
const geocode = require('./utils/geoCode');

const forecast = require('./utils/foreCast');

let address = process.argv[2];

geocode(address, (error, { lat, lng, loc } = {}) => {
    if (address) {
        if (!lat) {
            console.log('error: ', error);
            return;
        }
        forecast(lng, lat, (error, foreCastdata) => {
            console.log('error', error);
            console.log('data', foreCastdata);
            console.log('Location: ', lat, lng, loc);

        });
    } else {
        console.log('Please provide location after node app.js location');
        return;
    }

});

// console.log(process.argv);