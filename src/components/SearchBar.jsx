import React, { useRef, useState } from 'react';
import {Form, Button, Icon} from "semantic-ui-react";

const SearchBar = ({setQuery}) => {
  const [inputVal, setInputVal] = useState('');
  const [errors, setErrors] = useState([]);
  const queryInputRef = useRef(null);

  const onChange = (e)=> setInputVal(e.target.value);

  const onSubmit = (e) =>{
    e.preventDefault();
    if(inputVal.trim === '') setErrors([...errors, 'Search value cannot be empty.']);
    if(!errors.length) {
      setQuery(inputVal);
      setInputVal('');
      queryInputRef.current.blur();
    }
  }
    return ( <>
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <div className="ui action right labeled input big">
          <input placeholder="Search by location.." name="query" type="text" onChange={onChange} value={inputVal} ref={queryInputRef} />
        <Button animated disabled={inputVal === ''} type="submit">
          <Button.Content visible>
            <Icon name="search"/>
          </Button.Content>
          <Button.Content hidden>
            Search
          </Button.Content>
        </Button>
        </div>
      </Form.Field>
      </Form>
  </> );
}
 
export default SearchBar;