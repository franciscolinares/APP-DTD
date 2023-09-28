import React  from 'react';

export default function item(tarea){ 
  return(    
        <li  key={tarea.item.id}><input type="checkbox"/>{tarea.item.name}</li>            
    );
}