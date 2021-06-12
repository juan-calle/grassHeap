const base_url = "https://api.openweathermap.org/data/2.5";
// const city = "london";
const api_key = process.env.API_KEY;
const fetch = require("node-fetch");

async function getWeather(req, res) {
  const { city } = req.body;
  console.log(city);
  try {
    const path = `${base_url}/weather?units=metric&q=${city}&appid=${api_key}`;
    const JSONweather = await fetch(path);
    const weather = await JSONweather.json();
    res.status(200).send(weather);
  } catch (err) {
    return err;
  }
}

async function getFiveDayForecast(req, res) {
  try {
    const path = `${base_url}/forecast?units=metric&q=${city}&appid=${api_key}`;
    const JSONweather = await fetch(path);
    const weather = await JSONweather.json();
    res.status(200).send(weather);
  } catch (err) {
    return err;
  }
}

module.exports = { getWeather, getFiveDayForecast };
