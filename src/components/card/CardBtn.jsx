import React from 'react';
import {Button, Icon} from "semantic-ui-react"

const CardBtn = ({className, icon, content, callback}) => {
    return ( 
<Button className={className} animated fluid onClick={callback}>
          <Button.Content visible>
            <Icon name={icon}/>
          </Button.Content>
          <Button.Content hidden>
            {content}
          </Button.Content>
        </Button>
     );
}
 
export default CardBtn;