import React from 'react';

const CardMisc = ({locationWeather:{humidity, percipitation, wind}}) => {

    return ( 
        <>
        <div className="miscField">
                <span className="fieldTitle">Humidity</span>
    <span className="fieldBody">{humidity}</span>
            </div>
            <div className="miscField">
                <span className="fieldTitle">Percipitation</span>
    <span className="fieldBody">{percipitation}</span>
            </div>
            <div className="miscField">
                <span className="fieldTitle">Wind</span>
    <span className="fieldBody">{wind}</span>
            </div>
            </>
     );
}
 
export default CardMisc;