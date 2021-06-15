import { SERVER_URL as base_url } from "../utils/config";

exports.getWeather = async (city = {}) => {
  try {
    const JSONweather = await fetch(`${base_url}/weather`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(city),
    });
    const weather = await JSONweather.json();
    if (weather.cod === "400" || weather.cod === "404") throw new Error();
    return weather;
  } catch (err) {
    throw new Error(400);
  }
};
