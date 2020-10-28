import React, { useState,  useEffect} from 'react';

import WeatherCard from "./WeatherCard"
import {fetchWeather} from "../services/weatherSer";

const MainWeatherCard = ({query, defaultDispatch}) => {
    const [cityWeather, setCityWeather] = useState({});

    useEffect(()=>{
        fetchWeather(query).then(({data})=> setCityWeather(data));
    }, [query]);

    return cityWeather ? <WeatherCard cityWeather={cityWeather}/> : null;
}
 
export default MainWeatherCard;