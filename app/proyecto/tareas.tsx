import React, { useState }  from 'react';
import Items from './Items';

export default function Listado(props){ 
  var contador = props.Listado.length
  return(        
     <ul style={{color:'red'}}>
         <h1 >Total tareas agregadas:{contador} </h1>          
          {props.Listado.map(tarea => (          
          <Items item={tarea}/>          
        ))}        
        <h1 >Total tareas seleccionadas: </h1>
      </ul>    
      
    );
}