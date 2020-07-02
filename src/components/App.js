import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import WeatherContainer from './Weather/Weather';

// JSON Data - {WIP}
// import cityData from '../utils/city_list.json';

const App = () => {
  const appID = 'daddc13f21c2e3b7b755ba12eb40b020';
  const [forecast, setForecast] = useState([]);

  // add JSON data to list
  const [cities, setCities] = useState();
  useEffect(() => {
    const getCities = () => {

    }

    getCities();
  }, [])

  const childProps = {
    forecast: forecast,
    setForecast: setForecast,
    appID: appID,
    cities: cities
  };

  return (
    <div className="App">
      <div className="barContainer">
        <h1>Weather</h1>
        <SearchBar props={childProps} />
      </div>
      <div className="weatherContainer">
        <WeatherContainer props={childProps} />
      </div>
    </div>
  );
};

export default App;
