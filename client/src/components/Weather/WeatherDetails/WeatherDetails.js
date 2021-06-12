import React from "react";
import "./WeatherDetails.css";

function WeatherDetails({ weather, changeCity }) {
  return (
    <h1>
      Weather in <a onClick={changeCity}>{weather.name}</a> today:
      {weather.weather[0]?.description}
      <a
        href={`https://www.bbc.co.uk/weather/${weather.id}`}
        rel="noreferrer"
        target="_blank"
      >
        <img className="Weather__icon" src={weather.icon_link}></img>
      </a>
    </h1>
  );
}

export default WeatherDetails;
