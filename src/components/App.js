import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Weather from './Weather/Weather';

// JSON Data - {WIP}
// import cityData from '../utils/city_list.json';

import './App.css';

const App = () => {
  const appID = 'daddc13f21c2e3b7b755ba12eb40b020';
  const [forecast, setForecast] = useState([]);
  const [lastSearched, setLastSearched] = useState([]);
  const [forecastArray, setForecastArray] = useState([]);

  const childProps = {
    forecast: forecast,
    setForecast: setForecast,
    appID: appID,
    // lastSearched: lastSearched,
    // setLastSearched: setLastSearched
  };

  useEffect(() => {
    const getForecast = () => {
      if (forecast.length !== 0) {
        setLastSearched(forecast["city"].name)
        const dataArray = forecast["list"];
        const convertedArray = dataArray.map(t => {
          const dateObject = new Date((t.dt * 1000));

          const newObject = {
            day: dateObject.toLocaleString("en-US", { weekday: "long" }), // Monday
            main: t.main,
            weather: t.weather
          }
          return newObject
        });

        // Filter same days.
        const fiveDayArray = convertedArray.reduce((unique, current) => {
          return typeof unique.find(item => item.day === current.day) === 'undefined' ? unique.concat([current]) : unique;
        }, [])
        setForecastArray(fiveDayArray);
      }
    }

    const clearForecast = () => {
      setForecastArray([]);
      setLastSearched([]);
    }

    if (typeof forecast !== 'undefined') getForecast();
    else clearForecast();
  }, [forecast])

  return (
    <div className="App">
      <div className="barContainer">
        <h1 className="title">Five Day Forecast</h1>
        <SearchBar props={childProps} />
      </div>
      <div className="weatherContainer">
        {typeof forecast !== 'undefined' && forecast.length !== 0 ? (
          <>
            <h3 className="resultText">Forecast results for "{lastSearched}"</h3>
            {forecastArray.map((data, index) => {
              let x;
              if (index <= 4) x = <Weather day={data.day} icon={data.weather[0].main} minTemp={data.main.temp_min} maxTemp={data.main.temp_max} key={index} />;
              return x;
            })}
          </>
        ) : <h3 className="resultText">No results found.</h3>
        }
      </div>
    </div>
  );
};

export default App;
