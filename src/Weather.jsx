import React, { useState } from "react";

function Weather() {
  // API configuration
  const api = {
    key: "c1dfc0087901f6f8b1b52781a5823b49",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  // State variables
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // Search function to fetch weather data
  const Search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery; // This line seems to be missing the updated query value, it should be like setQuery(result.name) for example
        });
    }
  };

  // Function to build a date string
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Getting day, date, month, and year
    let day = days[d.getDay()]; // Fixed method name from
    let date = d.getDate(); // Fixed method name from getdata
    let month = months[d.getMonth()]; // Fixed method name getMonth
    let year = d.getFullYear(); // Fixed method name from getFullyear

    return `${day} ${date} ${month} ${year}`; // Return the formatted date string
  };

  // ... Rest of the component

  return (
    <div>
      <main>
        <div className="Search-bor">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={Search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="location-box">
            <div className="loaction">
              {weather.name},{weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new data())}</div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Weather;
