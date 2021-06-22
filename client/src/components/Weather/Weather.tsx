import React from 'react';
import { useEffect, useState } from 'react';
import { getWeather } from '../../services/WeatherApiServices';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import './Weather.css';
import { APIWeather } from '../../common/types';

function Weather(): JSX.Element {
  const storedCity = window.localStorage.getItem('city') || null;
  const [weather, setWeather] = useState<APIWeather>({ });
  const [city, setCity] = useState<string | null>(storedCity);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getWeather({ city })
      .then(APIweather => {
        APIweather.icon_link = `https://openweathermap.org/img/wn/${APIweather.weather[0].icon}@2x.png`;
        setWeather(APIweather);
        setError(false);
      })
      .catch(() => setError(true));
  }, [city]);

  function changeCity(): string {
    const promptResult: string | null = prompt(
      'Please enter your city',
      'london',
    );
    if (promptResult) {
      localStorage.setItem('city', promptResult);
      setCity(promptResult);
      return promptResult;
    } else {
      return '';
    }
  }
  useEffect(() => {
    localStorage.getItem('city')
      ? setCity(localStorage.getItem('city'))
      : changeCity();

    return () => setError(false);
  }, []);

  return (
    <div className="Weather">
      {' '}
      {error ? (
        <h1>
          No weather found for {city} :(
          <a onClick={() => changeCity()}> try again</a>
        </h1>
      ) : (
        <WeatherDetails changeCity={changeCity} weather={weather} />
      )}
    </div>
  );
}

export default Weather;
