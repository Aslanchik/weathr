import React, { useContext, useEffect, useState } from 'react';
import {Card, Image, Icon, Popup, Accordion} from "semantic-ui-react"

import {WeatherContext} from "../../context/weatherContext";
import {fetchWeather} from "../../services/weatherSer";
import Spinner from '../../util/Spinner';
import CardBtn from './CardBtn';
import CardMisc from './CardMisc';

const WeatherCard = ({location, mainWeatherCard = false}) => {
    const [celsius, setCelsius] = useState(true);
    const [accordActive, setAccordActive] = useState(false);
    const [locationWeather, setLocationWeather] = useState();
    const {locationsDispatch, defaultLocations} = useContext(WeatherContext);
    
    useEffect(()=>{
      const fetchLocationWeather = async () =>{
        try{
          await fetchWeather(location).then(({data})=> {
            setLocationWeather(data)
          });
        }catch(err){
          console.log(err);
        }
        setTimeout(fetchLocationWeather, 300000)
      }
      fetchLocationWeather();
    },[location]);

    const handleSaveLocation = () =>{
      const splitString = locationWeather.location.split(',');
      if(defaultLocations.length === 2){
        alert('You can only have two default locations, remove one before adding another one.')
      } else if(defaultLocations.includes(splitString[0])){
        alert('This location is already a default location.')
      } else {
        locationsDispatch({type:'ADD_DEFAULT_LOCATION', payload:splitString[0]})

      };
    }

    const handleDeleteLocation = () =>{
      const splitString = locationWeather.location.split(',');
      console.log(splitString[0])
      locationsDispatch({type:'REMOVE_DEFAULT_LOCATION', payload:splitString[0]});
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
            <CardMisc locationWeather={locationWeather}/>
        </Card.Description>
        <Card.Description className="mobileMisc" >
          <Accordion>
            <Accordion.Title className="accordTitle" active={accordActive} onClick={()=> setAccordActive(!accordActive)}>
              <Icon name="info"/>
              More Information
            </Accordion.Title>
          <Accordion.Content active={accordActive}>
            <CardMisc locationWeather={locationWeather}/>
        </Accordion.Content>
          </Accordion>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      {mainWeatherCard ? (
        <CardBtn className='saveBtn' icon="heart" content="Save Location to default" callback={handleSaveLocation}/>
      ): (
        <CardBtn className='removeBtn' icon="trash alternate" content="Remove Location from default" callback={handleDeleteLocation}/>
      )}
      </Card.Content>
    </Card>
      )
    }

    return locationWeather ? renderWeatherCard() : <Spinner/>;
}
 
export default WeatherCard;