import React, { useContext } from 'react';
import {Container, Grid, Transition} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import {WeatherContext} from "../context/weatherContext";
import MainWeatherCard from './MainWeatherCard';
import DefaultWeatherCardWrapper from './DefaultWeatherCardWrapper';

const Dashboard = () => {
    const {defaultCities, defaultDispatch, query, setQuery, fetching ,setFetching} = useContext(WeatherContext);

    return ( <>
    <Container >
        <Grid columns={"equal"} className="dashBoardWrapper"
        >
            <Grid.Row centered>
                <h1 className="dashHeader">
                    <span className="dashTitle">
                        weathr
                        </span>
                    <span className="sunDot">.</span>
                </h1>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column width={12}>
        <SearchBar setQuery={setQuery} setFetching={setFetching}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                    <Grid.Column width={8} className={fetching ? 'mainWeatherCard': ''}>
                
                <MainWeatherCard query={query} defaultDispatch={defaultDispatch} fetching={fetching} setFetching={setFetching}/> 
                    
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <h2 className="defaultTitle">Default Locations</h2>
            </Grid.Row>
            <Grid.Row centered>
    <DefaultWeatherCardWrapper defaultCities={defaultCities} defaultDispatch={defaultDispatch}/>
            </Grid.Row>
        </Grid>
    </Container></> );
}
 
export default Dashboard;