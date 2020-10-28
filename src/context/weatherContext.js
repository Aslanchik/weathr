import React, { createContext, useEffect, useReducer, useState } from "react";

import { fetchWeather } from "../services/weatherSer";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [defaultCities, setDefaultCities] = useState(["new york", "netanya"]);
  const [defaultCitiesWeather, setDefaultCitiesWeather] = useState([]);

  useEffect(() => {
    defaultCities.forEach(async (city) => {
      await fetchWeather(city).then(({ data }) =>
        setDefaultCitiesWeather([...defaultCitiesWeather, data])
      );
    });
  }, [defaultCities, defaultCitiesWeather]);

  return (
    <WeatherContext.Provider value={{ query, setQuery }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
