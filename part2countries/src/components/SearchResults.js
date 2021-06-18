import React from "react";

const SearchResults = ({
  fCountries,
  weather,
  filterString,
  handleFilter,
  capital,
}) => {
  const length = Object.keys(fCountries).length;

  let output;
  if (filterString !== "") {
    output =
      length > 10
        ? "Too many matches, please specify further!"
        : fCountries.map((country) => (
            <ul key={country.numericCode}>
              <li>{country.name}</li>{" "}
              <button onClick={() => handleFilter(country.name)}>View</button>
            </ul>
          ));
  } else {
    output = "";
  }
  if (length === 1) {
    let weatherOutput;
    try {
      weatherOutput = (
        <div>
          <p>Temperature {weather.current.temperature} Celsius</p>
          <img src={weather.current.weather_icons[0]} alt="" />
          <p>Wind {weather.current.wind_speed}</p>
        </div>
      );
    } catch {
      weatherOutput = <div></div>;
    }
    output = (
      <div key={fCountries[0].numericCode}>
        <h1>{fCountries[0].name}</h1>
        <p>{fCountries[0].capital}</p>
        <p>{fCountries[0].population}</p>
        <h2>Languages</h2>
        <ul>
          {fCountries[0].languages.map((lang) => (
            <li key={lang.iso639_1}>{lang.name}</li>
          ))}
        </ul>
        <div>
          <img
            src={fCountries[0].flag}
            alt="Country Flag"
            style={{ width: "50vw", height: "auto" }}
          />
        </div>
        <div>
          <h1>Weather in {capital}</h1>
          {weatherOutput}
        </div>
      </div>
    );
  }
  return <div>{output}</div>;
};

export default SearchResults;
