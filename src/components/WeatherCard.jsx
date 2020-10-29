import React, { useContext, useState } from 'react';
import {Card, Image, Button, Icon, Popup, Accordion} from "semantic-ui-react"

import {WeatherContext} from "../context/weatherContext";

const WeatherCard = ({locationWeather, mainWeatherCard = false}) => {
    const [celsius, setCelsius] = useState(true);
    const [accordActive, setAccordActive] = useState(false);
    const {defaultDispatch, defaultLocations} = useContext(WeatherContext);

    const handleSaveLocation = () =>{
      if(defaultLocations.length > 2){
        alert('You can only have two default locations, remove one before adding another one.')
      } else {
        const splitString = locationWeather.location.split(',');
        defaultDispatch({type:'ADD_DEFAULT', payload:splitString[0]})
      };
    }

    const handleDeleteLocation = () =>{
      const splitString = locationWeather.location.split(',');
      defaultDispatch({type:'REMOVE_DEFAULT', payload:splitString[0]});
    }

    const renderMisc = () =>{
      return (
        <>
        <div className="miscField">
                <span className="fieldTitle">Humidity</span>
    <span className="fieldBody">{locationWeather.humidity}</span>
            </div>
            <div className="miscField">
                <span className="fieldTitle">Percipitation</span>
    <span className="fieldBody">{locationWeather.percipitation}</span>
            </div>
            <div className="miscField">
                <span className="fieldTitle">Wind</span>
    <span className="fieldBody">{locationWeather.wind}</span>
            </div>
            </>
      )
    }

    const renderWeatherCard = () =>{
      return (
        <Card raised fluid color='yellow'>
      <Card.Content>
        <Image
          floated='left'
          src={locationWeather.icon}
        />
        <Card.Header>
            <h2>
                <span className="tempValue">{celsius ? `${locationWeather.tempC}°` : `${locationWeather.tempF}°`}</span>
            </h2>
                <Popup content="Celsius" trigger={<span className={`temp ${celsius ? 'active' : '' }`} onClick={()=> setCelsius(true)}>C</span>}/>
                <Popup content="Fahrenheit" trigger={<span className={`temp ${celsius ? '' : 'active' }`} onClick={()=> setCelsius(false)}>F</span>}/>
        </Card.Header>
    <Card.Header>
        <Popup content="Location" trigger={<Icon name="location arrow" className="fieldIcon"/>}/>
        {locationWeather.location}
    </Card.Header>
    <Card.Meta>
        <Popup content="Last update" trigger={<Icon name="clock" className="fieldIcon"/>}/>
        {locationWeather.lastUpdated}
    </Card.Meta>
    <Card.Description>
        <div className="miscField">
            <span className="fieldTitle">Description</span>
    <span className="fieldBody">{locationWeather.description}</span>
        </div>
    </Card.Description>
        <Card.Description className="desktopMisc">
            {renderMisc()}
        </Card.Description>
        <Card.Description className="mobileMisc" >
          <Accordion>
            <Accordion.Title className="accordTitle" active={accordActive} onClick={()=> setAccordActive(!accordActive)}>
              <Icon name="info"/>
              More Information
            </Accordion.Title>
          <Accordion.Content active={accordActive}>
            {renderMisc()}
        </Accordion.Content>
          </Accordion>
        </Card.Description>
      </Card.Content>
      {mainWeatherCard ? (<Card.Content extra>
        <Button className="saveBtn" animated fluid onClick={handleSaveLocation}>
          <Button.Content visible>
            <Icon name="heart"/>
          </Button.Content>
          <Button.Content hidden>
            Save Location to default
          </Button.Content>
        </Button>
      </Card.Content>): (<Card.Content extra>
        <Button className="removeBtn" animated fluid onClick={handleDeleteLocation}>
          <Button.Content visible>
            <Icon name="trash alternate"/>
          </Button.Content>
          <Button.Content hidden>
            Remove Location from default
          </Button.Content>
        </Button>
      </Card.Content>)}
    </Card>
      )
    }

    return locationWeather ? renderWeatherCard() : null;
}
 
export default WeatherCard;