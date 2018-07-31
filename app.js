const yargs = require('yargs');
const request = require('request');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

request({
    url: 'https://api.darksky.net/forecast/20abc92f613d703d308e95beefe87ccc/28.1600073,-82.31197209999999',
    json: true
}, (error, response, body) => {
   if (!error && response.statusCode === 200) {
       console.log(body.currently.temperature);
   } else {
       console.log('Unable to fetch weather.');
   }
});