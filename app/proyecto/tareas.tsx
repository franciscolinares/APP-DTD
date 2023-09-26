import React, { useState }  from 'react';
import Items from './Items';

//const [tareas, setTarea] = useState([]);
export default function Listado(tareas){ 
  return(
     <ul style={{color:'red'}}>
          {tareas.Listado.map(tarea => (
          /*<li key={tarea.id}>{tarea.name}</li>*/
          <Items item={tarea}/>
        ))}
      </ul>    
    );
}