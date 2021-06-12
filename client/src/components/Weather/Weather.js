import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWeather } from "../../services/WeatherApiServices";
import "./Weather.css";

function Weather() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("city")) {
      const city = prompt("Please enter your city", "london");
      if (city) localStorage.setItem("city", city);
    }
  }, []);

  useEffect(() => {
    const city = localStorage.getItem("city");
    getWeather({ city }).then((APIweather) => {
      console.log(APIweather);
      APIweather.icon_link = `https://openweathermap.org/img/wn/${APIweather.weather[0].icon}@2x.png`;
      setWeather(APIweather);
    });
  }, []);

  console.log(localStorage.getItem("city"));

  return (
    <div className="Weather">
      <h1>
        Weather in <Link to="www.google.com">{weather.name}</Link> today:{" "}
        {weather.weather?.[0].description}
        <a
          href={`https://www.bbc.co.uk/weather/${weather.id}`}
          rel="noreferrer"
          target="_blank"
        >
          <img className="Weather__icon" src={weather.icon_link}></img>
        </a>
      </h1>
    </div>
  );
}

export default Weather;
