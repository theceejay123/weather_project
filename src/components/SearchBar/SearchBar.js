import React from 'react';

const SearchBar = ({ props }) => {

  const searchData = () => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=winnipeg&appid=daddc13f21c2e3b7b755ba12eb40b020")
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(data => {
        props.setForecast(data)
      })
  };

  return (
    <div className="searchBarContainer">
      <button onClick={searchData}>Click Me</button>
    </div>
  );
}

export default SearchBar;