import React from 'react';
import {Grid} from "semantic-ui-react"


import WeatherCard from "./card/WeatherCard";


const DefaultWeatherCardWrapper = ({defaultLocations, defaultDispatch}) => {

    return (
            defaultLocations ? defaultLocations.map((location, i)=> (
                        <Grid.Column className="defaultCardWrapper" widescreen={6} largeScreen={6} computer={8} tablet={8} mobile={12} key={i}>
                            <WeatherCard location={location} defaultDispatch={defaultDispatch}/>
                        </Grid.Column>
        )): <div>No default locations, try adding one!</div>
     );
}
 
export default DefaultWeatherCardWrapper;