import React, { useContext } from 'react';
import {Container, Grid, GridColumn} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import {WeatherContext} from "../context/weatherContext";
import MainWeatherCard from './MainWeatherCard';

const Dashboard = () => {
    const {defaultCities, defaultDispatch, query, setQuery} = useContext(WeatherContext);

    return ( <><Container >
        <Grid columns={1} className="dashboardWrapper"
        >
            <Grid.Row>
                <h1 className="dashTitle">Weathr.</h1>
            </Grid.Row>
            <Grid.Row centered>
                <GridColumn width={12}>
        <SearchBar setQuery={setQuery}/>
                </GridColumn>
            </Grid.Row>
            <Grid.Row>
                <MainWeatherCard query={query} defaultDispatch={defaultDispatch}/>
            </Grid.Row>
            <Grid.Row>
                {defaultCities ? defaultCities.map((city, i)=> (
                    <Grid.Column key={i}>
                        <WeatherCard city={city} defaultDispatch={defaultDispatch}/>
                    </Grid.Column>
    )) : null}
            </Grid.Row>
        </Grid>
    </Container></> );
}
 
export default Dashboard;