import React, { createContext, useReducer, useState } from "react";

import { defaultReducer } from "../reducers/defaultReducer";

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [defaultCities, dispatch] = useReducer(defaultReducer, [], () => {
    if (localStorage.getItem("defaultCities")) {
      const storedDefaultCities = localStorage.getItem("defaultCities");
      return storedDefaultCities;
    } else return ["new york", "netanya"];
  });

  /* useEffect(() => {
    const storedDefaultCities = localStorage.getItem("defaultCities");
    if (!storedDefaultCities) {
      localStorage.setItem("defaultCities", defaultCities);
    } else {

    }
  }, [defaultCities]); */

  return (
    <WeatherContext.Provider
      value={{ query, setQuery, defaultCities, defaultDispatch: dispatch }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
