import React, { useContext } from 'react';
import {Container, Grid} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import {WeatherContext} from "../context/weatherContext";
import MainWeatherCard from './MainWeatherCard';
import DefaultWeatherCardWrapper from './DefaultWeatherCardWrapper';

const Dashboard = () => {
    const {defaultLocations, defaultDispatch, query, setQuery} = useContext(WeatherContext);

    return ( <>
    <Container >
        <Grid columns={"equal"} doubling className="dashBoardWrapper"
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
        <SearchBar setQuery={setQuery}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column className={query ? 'mainWeatherCard': ''} largeScreen={8} widescreen={10} computer={8} tablet={8} mobile={12}>
                <MainWeatherCard query={query} defaultDispatch={defaultDispatch} /> 
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <h2 className="defaultTitle">Default Locations</h2>
            </Grid.Row>
            <Grid.Row centered>
    <DefaultWeatherCardWrapper defaultLocations={defaultLocations} defaultDispatch={defaultDispatch}/>
            </Grid.Row>
        </Grid>
    </Container></> );
}
 
export default Dashboard;