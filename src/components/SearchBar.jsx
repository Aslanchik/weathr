import React, { useContext } from 'react';

import {Input} from "semantic-ui-react";
import { WeatherContext } from '../context/weatherContext';

const SearchBar = () => {
  const {setQuery} = useContext(WeatherContext);
  
    return ( <>
    <Input
    icon={{ name: 'search', circular: true, link: true }} fluid
    placeholder='Search by city..'
  />
  </> );
}
 
export default SearchBar;