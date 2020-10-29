import React, { useState,  useEffect} from 'react';

import WeatherCard from "./WeatherCard"
import {fetchWeather} from "../services/weatherSer";
import Spinner from '../util/Spinner';

const MainWeatherCard = ({query, defaultDispatch, fetching, setFetching}) => {
    const [locationWeather, setLocationWeather] = useState();

    useEffect(()=>{
        const fetchLocationWeather = async () =>{
            setLocationWeather(null);
            try{
                 await fetchWeather(query).then(({data})=>{
                    setLocationWeather(data);
                    setFetching(false);
                    setTimeout(fetchLocationWeather, 60000);
                    console.log(data);
                })
            } catch(err){
                setFetching(false);
                console.log('lol')
                alert("Couldn't fetch data, try being more specific.")
            }
        }
        if(query){
                fetchLocationWeather();
        }
    }, [query, setFetching]);

return fetching ? <Spinner className="mainCardSpinner" size="huge" content="Fetching Data"/> : <WeatherCard locationWeather={locationWeather} mainWeatherCard/>;
}
 
export default MainWeatherCard;