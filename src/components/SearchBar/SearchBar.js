import React, { useState } from 'react';

const SearchBar = ({ props }) => {
  const [searchParam, setSearchParam] = useState("");

  const searchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchParam}&appid=${props.appID}`)
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