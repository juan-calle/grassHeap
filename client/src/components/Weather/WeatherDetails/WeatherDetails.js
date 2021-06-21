import React, { useEffect, useState } from 'react';
import { getGIF } from '../../../services/ServerApiServices';
import './WeatherDetails.css';

function WeatherDetails({ weather, changeCity }) {
  const [gifPath, setGifPath] = useState('');

  useEffect(() => {
    const query = weather.weather[0].main;
    getGIF({ query }).then(resultsArr => {
      const randomNumber = Math.floor(Math.random() * resultsArr.length);
      const imageURL = resultsArr[randomNumber].images.fixed_height.url;
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
