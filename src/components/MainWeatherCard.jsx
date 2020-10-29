import React, { useState,  useEffect} from 'react';
import {Container} from "semantic-ui-react";

import WeatherCard from "./WeatherCard"
import {fetchWeather} from "../services/weatherSer";

const MainWeatherCard = ({query, defaultDispatch}) => {
    const [cityWeather, setCityWeather] = useState({});

    const example = {
        description: "בהיר",
humidity: "64%",
icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
lastUpdated: "יום חמישי 11:00",
location: "Lalapur, אסאם, הודו",
percipitation: "1%",
tempC: "34",
tempF: "93",
wind: '5  קמ"ש'
    }

    useEffect(()=>{
        if(query) fetchWeather(query).then(({data})=> {
            console.log('main weather card useeffect');
            setCityWeather(data)});
        
    }, [query]);

    return cityWeather ? <WeatherCard cityWeather={example} mainWeatherCard/>: null;
}
 
export default MainWeatherCard;