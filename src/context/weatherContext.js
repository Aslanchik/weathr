import React, { createContext, useReducer, useState } from "react";

import { defaultReducer } from "../reducers/defaultReducer";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [fetching, setFetching] = useState(false);
  const [defaultLocations, dispatch] = useReducer(defaultReducer, [], () => {
    if (localStorage.getItem("defaultLocations")) {
      const storedDefaultLocations = localStorage
        .getItem("defaultLocations")
        .split(",");
      return storedDefaultLocations;
    } else return ["new york", "netanya"];
  });

  return (
    <WeatherContext.Provider
      value={{
        query,
        setQuery,
        defaultLocations,
        defaultDispatch: dispatch,
        fetching,
        setFetching,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
