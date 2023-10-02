import React  from 'react';

export default function item(props){ 
  return(    
        <li  key={props.item.id}><input type="checkbox"/>{props.item.name}</li>            
    );
}