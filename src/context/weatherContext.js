import React, { createContext, useReducer, useState } from "react";

import { defaultReducer } from "../reducers/defaultReducer";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [defaultLocations, locationsDispatch] = useReducer(
    defaultReducer,
    [],
    () => {
      if (localStorage.getItem("defaultLocations")) {
        const storedDefaultLocations = localStorage
          .getItem("defaultLocations")
          .split(",");
        return storedDefaultLocations;
      } else {
        const defaultLoc = ["Tel Aviv", "New York"];
        localStorage.setItem("defaultLocations", defaultLoc);
        return defaultLoc;
      }
    }
  );

  return (
    <WeatherContext.Provider
      value={{
        query,
        setQuery,
        locationsDispatch,
        defaultLocations,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
