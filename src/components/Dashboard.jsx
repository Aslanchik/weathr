import React from 'react';
import {Container, Grid, GridColumn} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const Dashboard = () => {
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
                <WeatherCard/>
            </Grid.Row>
        </Grid>
    </Container></> );
}
 
export default Dashboard;