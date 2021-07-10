import './WeatherDetails.css';

import React, { useEffect, useState } from 'react';

import { getGIF } from '../../../services/ServerApiServices';
import './WeatherDetails.css';
import { APIWeather } from '../../../common/types';

interface WeatherDetailsProps{
  weather: APIWeather;
  changeCity: () => string;
}

function WeatherDetails({ weather, changeCity } : WeatherDetailsProps) : JSX.Element {
  const [gifPath, setGifPath] = useState('');

  useEffect(() => {
    const query = weather.weather[0].main;
    getGIF(query).then(resultsObj => {
      const randomNumber = Math.floor(Math.random() * resultsObj.length);
      const imageURL = resultsObj[randomNumber].images.fixed_height.url;
      setGifPath(imageURL);
    });
  }, [weather]);

  return (
    <div className="WeatherDetails">
      <div className="WeatherDetails__text desktop">
        <h1>
          Weather in <a onClick={changeCity}>{weather.name}</a> today:{' '}
          {weather.weather[0]?.description}
        </h1>
      </div>
      <div className="WeatherDetails__text mobile">
        <h1>
          <a onClick={changeCity}>{weather.name}</a>:{' '}
          {weather.weather[0]?.description}
        </h1>
      </div>
      <div className="WeatherDetails__GIF">
        <a
          href={`https://www.bbc.co.uk/weather/${weather.id}`}
          rel="noreferrer"
          target="_blank">
          <img className="Weather__icon" src={gifPath}></img>
        </a>
      </div>
    </div>
  );
}

export default WeatherDetails;
