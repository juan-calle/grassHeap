import React from "react";
import { useEffect, useState } from "react";
import { getWeather } from "../../services/WeatherApiServices";

function Weather() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather().then((APIweather) => {
      APIweather.icon_link = `https://openweathermap.org/img/wn/${APIweather.weather[0].icon}@2x.png`;
      setWeather(APIweather);
    });
  }, []);

  return (
    <div className="Weather">
      <h1>
        Weather in {weather.name}: {weather.weather[0].description}
        <img className="Weather__icon" src={weather.icon_link}></img>
      </h1>
    </div>
  );
}

export default Weather;
