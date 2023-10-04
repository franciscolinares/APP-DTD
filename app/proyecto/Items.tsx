import React from 'react';

var cont = 0;
const Item=( {item , conteo} )=>{   
  const handleChange = () => {                  
        if (event.target.checked) {
          conteo(cont++)
          console.log('true',cont);
        } else {
          conteo(cont--)
          console.log('false',cont);
        }
  }; 
  return(        
        <li  key={item.id}><input type="checkbox"  onChange={handleChange}/>
        {item.name}</li>            
    );
}

export default Item;