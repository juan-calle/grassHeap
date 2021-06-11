const base_url = 'https://api.openweathermap.org/data/2.5/weather'
const city = 'london';
const api_key = process.env.API_KEY;
const fetch = require('node-fetch');

async function getWeather(req, res) {
  try {
    const path = `${base_url}?units=metric&q=${city}&appid=${api_key}`
    const JSONweather = await fetch(path);
    const weather = await JSONweather.json();
    res.status(200).send(weather);
  } catch (err) {
    return err;
  }
}


module.exports = { getWeather }

