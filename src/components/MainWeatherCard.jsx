import React, {useContext, useEffect, useState} from 'react';

import WeatherCard from "./WeatherCard"
import {WeatherContext} from "../context/weatherContext";
import {fetchWeather} from "../services/weatherSer";

const MainWeatherCard = () => {
    const {query} = useContext(WeatherContext);
    const [cityWeather, setCityWeather] = useState({});

    /* useEffect(()=>{
        fetchWeather(query).then(({data})=> setCityWeather(data));
    }, [query]); */

    return cityWeather ? <WeatherCard cityWeather={cityWeather}/> : null;
}
 
export default MainWeatherCard;