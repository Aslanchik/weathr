import React, { useContext, useEffect, useState } from 'react';
import {Container, Grid, GridColumn} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import {WeatherContext} from "../context/weatherContext";
import { fetchWeather } from "../services/weatherSer";

const Dashboard = () => {
    const [defaultCitiesWeather, setDefaultCitiesWeather] = useState([]);
    /* const {defaultCities} = useContext(WeatherContext); */
    const defaultCities = ['new york', 'netanya'];
    const fetchDefaultCityWeather = () =>{
        defaultCities.forEach((city)=>{
            fetchWeather(city).then(({data})=> setDefaultCitiesWeather([...defaultCitiesWeather, data]))
        })
        
    }
fetchDefaultCityWeather()

    return ( <><Container >
        <Grid columns={1} className="dashboardWrapper"
        >
            <Grid.Row>
                <h1 className="dashTitle">Weathr.</h1>
            </Grid.Row>
            <Grid.Row centered>
                <GridColumn width={12}>
        <SearchBar/>
                </GridColumn>
            </Grid.Row>
            <Grid.Row>
                {/* {defaultCitiesWeather ? defaultCitiesWeather.map((cityWeather, i)=> (
                    <Grid.Column key={i}>
                        <WeatherCard cityWeather={cityWeather}/>
                    </Grid.Column>
    )) : null} */}
    {}
            </Grid.Row>
        </Grid>
    </Container></> );
}
 
export default Dashboard;