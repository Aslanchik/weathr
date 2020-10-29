import React, { useState } from 'react';
import {Card, Image, Button, Icon, Popup} from "semantic-ui-react"
import Spinner from '../util/Spinner';

const WeatherCard = ({cityWeather, mainWeatherCard = false}) => {
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
    const renderWeatherCard = () =>{
      return (
        <Card raised fluid color='yellow'>
      <Card.Content>
        <Image
          floated='left'
          src={cityWeather.icon}
        />
        <Card.Header>
            <h2>
                <span className="tempValue">{celsius ? `${cityWeather.tempC}°` : `${cityWeather.tempF}°`}</span>
            </h2>
                <Popup content="Celsius" trigger={<span className={`temp ${celsius ? 'active' : '' }`} onClick={()=> setCelsius(true)}>C</span>}/>
                <Popup content="Fahrenheit" trigger={<span className={`temp ${celsius ? '' : 'active' }`} onClick={()=> setCelsius(false)}>F</span>}/>
        </Card.Header>
    <Card.Header>
        <Popup content="Location" trigger={<Icon name="location arrow" className="fieldIcon"/>}/>
        {cityWeather.location}
    </Card.Header>
    <Card.Meta>
        <Popup content="Last update" trigger={<Icon name="clock" className="fieldIcon"/>}/>
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
      {mainWeatherCard ? (<Card.Content extra>
        <Button className="saveBtn" animated fluid onClick={handleSaveCity}>
          <Button.Content visible>
            <Icon name="heart"/>
          </Button.Content>
          <Button.Content hidden>
            Save city to default
          </Button.Content>
        </Button>
      </Card.Content>): <Card.Content extra>
        <Button className="removeBtn" animated fluid onClick={handleSaveCity}>
          <Button.Content visible>
            <Icon name="trash alternate"/>
          </Button.Content>
          <Button.Content hidden>
            Remove city from default
          </Button.Content>
        </Button>
      </Card.Content>}
    </Card>
      )
    }

    return cityWeather ? renderWeatherCard() : null;
}
 
export default WeatherCard;