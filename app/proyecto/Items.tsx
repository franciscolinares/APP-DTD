import React  from 'react';

export default function item(tarea){ 
  return(    
          <li key={tarea.item.id}>{tarea.item.name}</li>            
    );
}