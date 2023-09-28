import React, { useState }  from 'react';
import Items from './Items';

export default function Listado(tareas){ 
  return(
     <ul style={{color:'red'}}>
          {tareas.Listado.map(tarea => (          
          <Items item={tarea}/>
        ))}
      </ul>    
    );
}