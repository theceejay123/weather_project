import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import WeatherContainer from './Weather/Weather';

const App = () => {
  const appID = 'daddc13f21c2e3b7b755ba12eb40b020';
  const [forecast, setForecast] = useState([]);

  const childProps = {
    forecast: forecast,
    setForecast: setForecast,
    appID: appID
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
