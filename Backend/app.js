const weather = require('weather');
const str = process.argv.slice(2).join("_").replace(' ', '_');
weather.get(str);



