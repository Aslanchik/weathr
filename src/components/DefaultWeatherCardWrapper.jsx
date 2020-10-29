import React, { useEffect, useState } from 'react';
import {Grid, Container} from "semantic-ui-react"

import {fetchWeather} from "../services/weatherSer";
import Spinner from '../util/Spinner';
import WeatherCard from "./WeatherCard";


const DefaultWeatherCardWrapper = ({defaultCities, defaultDispatch}) => {
    const [defaultCitiesWeather, setDefaultCitiesWeather] = useState([]);
    const [fetching, setFetching]= useState(true)

    useEffect(()=>{
        defaultCities.forEach((city)=>{
            fetchWeather(city).then(({data})=> {
                setDefaultCitiesWeather((defaultCitiesWeather)=>[...defaultCitiesWeather, data]);
            });
        })
    }, [defaultCities])


    return ( 
        
        
            <Grid.Column width={12}>
            <h2>Default Cities</h2>
                <Grid.Row>
            {defaultCitiesWeather ? defaultCitiesWeather.map((cityWeather, i)=> (
                        <Grid.Column width={6} key={i}>
                            <WeatherCard cityWeather={cityWeather} defaultDispatch={defaultDispatch}/>
                        </Grid.Column>
        )): null}
                </Grid.Row>
            </Grid.Column>
        
        
     );
}
 
export default DefaultWeatherCardWrapper;