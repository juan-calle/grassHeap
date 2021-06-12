import React from "react";
import { useEffect, useState } from "react";
import { getWeather } from "../../services/WeatherApiServices";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import "./Weather.css";

function Weather() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState(true);

  function changeCity() {
    const promptResult = prompt("Please enter your city", "london");
    if (promptResult) localStorage.setItem("city", promptResult);
    setCity(promptResult);
    return promptResult;
  }
  // hook runs after render
  useEffect(() => {
    localStorage.getItem("city")
      ? setCity(localStorage.getItem("city"))
      : changeCity();
    // second arg = [] => runs only on mounth
    // no second arg => runs every re-render
    //  second arg populated, runs for state change
    // returned function runs before the useEffect main body is run
    return () => setError(false);
  }, []);

  useEffect(() => {
    getWeather({ city })
      .then((APIweather) => {
        APIweather.icon_link = `https://openweathermap.org/img/wn/${APIweather.weather[0].icon}@2x.png`;
        setWeather(APIweather);
        setError(false);
      })
      .catch(() => setError(true));
  }, [city]);

  return (
    <div className="Weather">
      {error ? (
        <h1>
          No weather found for{" "}
          <a onClick={() => changeCity()}>&quot;{city}&quot;</a>
        </h1>
      ) : (
        <WeatherDetails changeCity={changeCity} weather={weather} />
      )}
    </div>
  );
}

export default Weather;
