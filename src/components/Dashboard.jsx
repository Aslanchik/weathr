import React, { useContext } from 'react';
import {Container, Grid} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import {WeatherContext} from "../context/weatherContext";
import MainWeatherCard from './MainWeatherCard';

const Dashboard = () => {
    const {defaultCities, defaultDispatch, query, setQuery} = useContext(WeatherContext);

    return ( <><Container >
        <Grid columns={3} className="dashboardWrapper"
        >
            <Grid.Row>
                <h1 className="dashHeader"><span className="dashTitle">Weathr</span><span className="sunDot">.</span></h1>
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
            <Grid.Row centered>
                {defaultCities ? defaultCities.map((city, i)=> (
                    <Grid.Column width={6} key={i}>
                        <WeatherCard city={city} defaultDispatch={defaultDispatch}/>
                    </Grid.Column>
    )) : null}
            </Grid.Row>
        </Grid>
    </Container></> );
}
 
export default Dashboard;