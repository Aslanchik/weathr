import React, { useEffect, useState } from 'react';
import {Grid} from "semantic-ui-react"

import {fetchWeather} from "../services/weatherSer";
import Spinner from '../util/Spinner';
import WeatherCard from "./WeatherCard";


const DefaultWeatherCardWrapper = ({defaultCities, defaultDispatch}) => {
    const [defaultCitiesWeather, setDefaultCitiesWeather] = useState([]);

    useEffect(()=>{
        // This will run once and then every 60 seconds to get the most recent data
        const fetchDefaultCitiesWeather=()=>{
            // Clear old weather data to avoid double rendering
            setDefaultCitiesWeather([]);
            defaultCities.forEach((city)=>{
                fetchWeather(city).then(({data})=> {
                    setDefaultCitiesWeather((defaultCitiesWeather)=>[...defaultCitiesWeather, data]);
                });
            })
            setTimeout(fetchDefaultCitiesWeather, 60000);
    }
        fetchDefaultCitiesWeather();
    }, [defaultCities])


    return (
            defaultCitiesWeather.length === 2 ? defaultCitiesWeather.map((cityWeather, i)=> (
                        <Grid.Column width={6} key={i}>
                            <WeatherCard cityWeather={cityWeather} defaultDispatch={defaultDispatch}/>
                        </Grid.Column>
        )): <div className="defaultSpinner"><Spinner size="huge" content="Fetching Updated Weather Data"/></div>
     );
}
 
export default DefaultWeatherCardWrapper;