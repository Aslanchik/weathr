import React, { useContext } from 'react';
import {Container, Grid} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import {WeatherContext} from "../context/weatherContext";
import MainWeatherCard from './MainWeatherCard';
import DefaultWeatherCardWrapper from './DefaultWeatherCardWrapper';

const Dashboard = () => {
    const {defaultCities, defaultDispatch, query, setQuery} = useContext(WeatherContext);

    return ( <>
    <Container >
        <Grid columns={3} className="dashboardWrapper"
        >
            <Grid.Row>
                <h1 className="dashHeader">
                    <span className="dashTitle">
                        weathr
                        </span>
                    <span className="sunDot">.</span>
                </h1>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column width={12}>
        <SearchBar setQuery={setQuery}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column width={8}>
                <MainWeatherCard query={query} defaultDispatch={defaultDispatch}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>

    <DefaultWeatherCardWrapper defaultCities={defaultCities} defaultDispatch={defaultDispatch}/>
            </Grid.Row>
        </Grid>
    </Container></> );
}
 
export default Dashboard;