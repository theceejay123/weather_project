import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import './SearchBar.css';

const SearchBar = ({ props }) => {
  const [searchParam, setSearchParam] = useState("");

  const handleChange = (event) => {
    setSearchParam(event.target.value)
  }

  const searchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchParam.replace(/\s+/g, '')}&units=metric&appid=${props.appID}`)
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
      <InputGroup size="lg" className="mb-23">
        <FormControl
          placeholder="London, UK"
          aria-label="London, UK"
          aria-describedby="basic-addon2"
          onChange={handleChange} onKeyUp={(event) => {
            if (event.keyCode === 13) {
              searchData();
            }
          }}
        />
        <InputGroup.Append>
          <Button onClick={searchData} variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div >
  );
}

export default SearchBar;