import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Weather from './Weather/Weather';

// JSON Data - {WIP}
// import cityData from '../utils/city_list.json';

const App = () => {
  const appID = 'daddc13f21c2e3b7b755ba12eb40b020';
  const [forecast, setForecast] = useState([]);
  const [lastSearched, setLastSearched] = useState([]);

  const childProps = {
    forecast: forecast,
    setForecast: setForecast,
    appID: appID,
    lastSearched: lastSearched,
    setLastSearched: setLastSearched
  };

  return (
    <div className="App">
      <div className="barContainer">
        <h1>Weather</h1>
        <SearchBar props={childProps} />
      </div>
      <div className="weatherContainer">
        <Weather day={} icon={} minTemp={} maxTemp={} />
        <Weather day={} icon={} minTemp={} maxTemp={} />
        <Weather day={} icon={} minTemp={} maxTemp={} />
        <Weather day={} icon={} minTemp={} maxTemp={} />
        <Weather day={} icon={} minTemp={} maxTemp={} />
      </div>
    </div>
  );
};

export default App;
