import React, { useState } from 'react';
import {Card, Image, Button, Icon} from "semantic-ui-react"
import Spinner from '../util/Spinner';

const WeatherCard = ({cityWeather}) => {
    /* const {icon, tempC, tempF } = cityWeather; */
    const [celsius, setCelsius] = useState(true);

    const handleSaveCity = () =>{
        console.log('city saved')
    }

    /* const renderMisc = (cityWeather) =>{
        return (<div className="miscWrapper">
            
            </div>
        )
    } */

    console.log(cityWeather);
    return cityWeather ? ( 
        <Card raised fluid color='teal'>
      <Card.Content>
        <Image
          floated='left'
          src={cityWeather.icon}
        />
        <Card.Header>
            <h2>
                {celsius ? cityWeather.tempC : cityWeather.tempF}
                <span className="celsius">C</span>
                <span className="fahrenheit">F</span>
            </h2>
        </Card.Header>
    <Card.Header>
        <Icon name="location arrow" className="fieldIcon"/>
        {cityWeather.location}
    </Card.Header>
    <Card.Meta>
        <Icon name="clock" className="fieldIcon"/>
        {cityWeather.lastUpdated}
    </Card.Meta>
    <Card.Description>
        <div className="miscField">
            <span className="fieldTitle">Description</span>
    <span className="fieldBody">{cityWeather.description}</span>
        </div>
    </Card.Description>
        <Card.Description>
            <div className="miscField">
                <span className="fieldTitle">Humidity</span>
    <span className="fieldBody">{cityWeather.humidity}</span>
            </div>
            <div className="miscField">
                <span className="fieldTitle">Percipitation</span>
    <span className="fieldBody">{cityWeather.percipitation}</span>
            </div>
            <div className="miscField">
                <span className="fieldTitle">Wind</span>
    <span className="fieldBody">{cityWeather.wind}</span>
            </div>
        </Card.Description>
        
      </Card.Content>
      <Card.Content extra>
        <Button animated onClick={handleSaveCity}>
          <Button.Content visible>
            <Icon name="heart"/>
          </Button.Content>
          <Button.Content hidden>
            Save 
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
     ): (<Spinner size="huge" content="Fetching Data"/>);
}
 
export default WeatherCard;