import React, { createContext, useEffect, useState } from "react";

import { weatherReducer } from "../reducers/weatherReducer";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [query, setQuery] = useState("");
  /* const [defaultCities, dispatch] = useState(
    weatherReducer,
    ["new york", "netanya"],
    () => {
      if (localStorage.getItem("defaultCities")) {
        const storedDefaultCities = localStorage.getItem("defaultCities");
        return storedDefaultCities;
      } else {
        return ["new york", "netanya"];
      }
    }
  ); */

  /* useEffect(() => {
    const storedDefaultCities = localStorage.getItem("defaultCities");
    if (!storedDefaultCities) {
      localStorage.setItem("defaultCities", defaultCities);
    } else {

    }
  }, [defaultCities]); */

  return (
    <WeatherContext.Provider value={{ query, setQuery }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
