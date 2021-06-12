const base_url = "https://api.openweathermap.org/data/2.5";
const api_key = process.env.API_KEY;
const fetch = require("node-fetch");

async function getWeather(req, res) {
  const { city } = req.body;
  try {
    const path = `${base_url}/weather?units=metric&q=${city}&appid=${api_key}`;
    const JSONweather = await fetch(path);
    const weather = await JSONweather.json();
    if (weather.cod === "400") throw new Error();
    res.status(200).send(weather);
  } catch (err) {
    return res.status(400).send("bad request");
  }
}

async function getFiveDayForecast(req, res) {
  try {
    const path = `${base_url}/forecast?units=metric&q=${city}&appid=${api_key}`;
    const JSONweather = await fetch(path);
    const weather = await JSONweather.json();
    res.status(200).send(weather);
  } catch (err) {
    return res.status(400).send("bad request");
  }
}

module.exports = { getWeather, getFiveDayForecast };
