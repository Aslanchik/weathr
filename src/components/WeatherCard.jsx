import React from 'react';
import {Card} from "semantic-ui-react"

const WeatherCard = (props) => {
    console.log(props);
    return ( 
        <Card fluid>
            <Card.Header>
                City
            </Card.Header>
        </Card>
     );
}
 
export default WeatherCard;