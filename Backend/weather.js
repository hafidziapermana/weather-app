//Modul External
const https = require('https');
const api = require('api.json');
const weather = require('weather');


// Connect to URl Weather Underground
function get(str) {
    const request = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${str}.json`, response => {
        
        let body = "";
        // Read data
        response.on('data', bunch_data => {
            body += bunch_data;
        });
        response.on('end', () => {
            const weather = JSON.parse(body);
            
            // Print output
            printWeather(weather);
            //console.log(weather);
        });
    });
}


// Func to print output

function printWeather(weather) {
    const message = 
    `Current temperature in 
    ${weather-js.current_observation.display_location.city} is 
    ${weather-js.current_observation.temp_f}F`;
    
    console.log(message);
}






//"http://api.wunderground.com/api/86454896d18323b1/geolookup/conditions/q/IA/Cedar_Rapids.json"

