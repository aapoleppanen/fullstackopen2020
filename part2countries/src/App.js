import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./components/SearchResults";
import FilterInput from "./components/FilterInput";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterString, setFilter] = useState("");
  const [weather, setWeather] = useState([]);
  const [capital, setCapital] = useState("");
  const [fCountries, setFCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const params = {
    access_key: process.env.REACT_APP_API_KEY,
    query: capital,
  };

  useEffect(() => {
    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => setWeather(response.data));
  }, [capital]);

  const handleFilter = (filter) => {
    setFilter(filter);
    const fTCountries =
      filter === ""
        ? countries
        : countries.filter(
            (countries) =>
              countries.name
                .toString()
                .toLowerCase()
                .includes(filter.toLowerCase()) === true
          );
    setFCountries(fTCountries);
    if (Object.keys(fTCountries).length === 1) {
      setCapital(fTCountries[0].capital);
    }
  };

  return (
    <div>
      <h1>Countries database</h1>
      <br />
      <FilterInput
        handleFilter={handleFilter}
        filterString={filterString}
      ></FilterInput>
      <br />
      <div>
        <SearchResults
          fCountries={fCountries}
          weather={weather}
          capital={capital}
          handleFilter={handleFilter}
          filterString={filterString}
        ></SearchResults>
      </div>
    </div>
  );
}

export default App;
