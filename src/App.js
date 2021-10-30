import React from 'react';
import { useState } from 'react';
import { fetchWeatherData } from './api/FetchWeather';
import './App.css';

export const App = () => {

  const [weatherData, setWeatherData] = useState("");
  const [city, setCity] = useState({});


  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeatherData(e.target.value);
      console.log(data);
      setCity(data);
      setWeatherData("");
    }
  }

  return (
    <div className="main-container">
      <input type="text" className="search" placeholder="Search ..." value={weatherData} onChange={(e) => setWeatherData(e.target.value)} onKeyPress={search} />
      {city.main &&
        <div className="city">
          <h1 className="city-name">
            <span>{city.name}</span>
            <sup>{city.sys.country}</sup>
          </h1>
          <div className="city-temp">
            {Math.round(city.main.temp)}
            <sup>°C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt={city.weather[0].description} />
            <p>{city.weather[0].description}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default App;