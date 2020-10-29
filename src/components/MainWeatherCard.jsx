import React, { useState,  useEffect} from 'react';

import WeatherCard from "./WeatherCard"
import {fetchWeather} from "../services/weatherSer";
import Spinner from '../util/Spinner';

const MainWeatherCard = ({query, defaultDispatch, fetching, setFetching}) => {
    const [cityWeather, setCityWeather] = useState();

    useEffect(()=>{
        if(query) fetchWeather(query).then(({data})=> {
            setCityWeather(data);
            setFetching(false);
        });
    }, [query, setFetching]);

return fetching ? <Spinner className="mainCardSpinner" size="huge" content="Fetching Data"/> : <WeatherCard cityWeather={cityWeather} mainWeatherCard/>;
}
 
export default MainWeatherCard;