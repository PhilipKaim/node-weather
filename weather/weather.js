const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/20abc92f613d703d308e95beefe87ccc/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
       if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
       } else {
            callback('Unable to fetch weather.')
       }
    });
}

module.exports.getWeather = getWeather;