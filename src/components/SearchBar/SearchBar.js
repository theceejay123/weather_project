import React, { useState } from 'react';

const SearchBar = ({ props }) => {
  const [searchParam, setSearchParam] = useState("");

  const handleChange = (event) => {
    setSearchParam(event.target.value)
  }

  const searchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchParam}&units=metric&appid=${props.appID}`)
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
      <input onChange={handleChange} onKeyUp={(event) => {
        if (event.keyCode === 13) {
          searchData();
        }
      }} />
      <button onClick={searchData}>Search</button>
    </div >
  );
}

export default SearchBar;