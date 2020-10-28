import React from 'react';

import {Input} from "semantic-ui-react";

const SearchBar = ({setQuery}) => {
  
    return ( <>
    <Input
    icon={{ name: 'search', circular: true, link: true }} fluid
    placeholder='Search by city..'
  />
  </> );
}
 
export default SearchBar;