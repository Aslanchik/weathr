import React from 'react';

import WeatherCard from "./card/WeatherCard"

const MainWeatherCard = ({query}) => {

return query ? <WeatherCard location={query} mainWeatherCard/> : null;
}
 
export default MainWeatherCard;