import React, { useState }  from 'react';
import Items from './Items';

const  Listado = (props) =>{ 
  const [cont,setCont] = useState(0);
  var contador = props.Listado.length     
  
  const conteo = (cont) =>{
    setCont(cont);
  }

  return(        
     <ul style={{color:'red'}}>
         <h1 >Total tareas agregadas:{contador} </h1>                  
         <h1 >Tareas pendientes:{cont} </h1> 
          {props.Listado.map(tarea => (          
          <Items item={tarea} conteo={conteo}/>          
        ))}        
                          
      </ul>    
      
    );
}

export default Listado;
