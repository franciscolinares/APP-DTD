import React from 'react';

var cont = 0;
export default function item(props){   
  const handleChange = () => {                   
        if (event.target.checked) {
          cont++         
          console.log('true ',cont);
        } else {
          cont--          
          console.log('false ',cont);
        }        
  }; 
  return(           
        <li key={props.item.id}><input type="checkbox"  onChange={handleChange}/>
        {props.item.name}</li>                    
      
    );
}