import React, { useEffect, useState } from 'react';
import {Grid} from "semantic-ui-react"

import {fetchWeather} from "../services/weatherSer";
import Spinner from '../util/Spinner';
import WeatherCard from "./WeatherCard";


const DefaultWeatherCardWrapper = ({defaultLocations, defaultDispatch}) => {
    const [defaultLocationsWeather, setDefaultLocationsWeather] = useState([]);

    useEffect(()=>{
        // This will run once and then every 60 seconds to get the most recent data
        const fetchDefaultLocationsWeather= async ()=>{
            // Clear old weather data to avoid double rendering
            setDefaultLocationsWeather([]);
            try{
                await defaultLocations.forEach((location)=>{
                    fetchWeather(location).then(({data})=> {
                        setDefaultLocationsWeather((defaultLocationsWeather)=>[...defaultLocationsWeather, data]);
                    });
                })
                setTimeout(fetchDefaultLocationsWeather, 60000);
            }catch(error){
                alert('Unexpected error, please try again later.')
            }
    }
        fetchDefaultLocationsWeather();
    }, [defaultLocations])


    return (
            defaultLocationsWeather.length !== 0 ? defaultLocationsWeather.map((locationWeather, i)=> (
                        <Grid.Column widescreen={6} largeScreen={6} computer={8} tablet={8} mobile={12} key={i}>
                            <WeatherCard locationWeather={locationWeather} defaultDispatch={defaultDispatch}/>
                        </Grid.Column>
        )): <div className="defaultSpinner"><Spinner size="huge" content="Fetching Updated Weather Data"/></div>
     );
}
 
export default DefaultWeatherCardWrapper;