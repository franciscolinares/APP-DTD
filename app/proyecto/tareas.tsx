import React, { useState }  from 'react';
import Items from './Items';

// este es el componente padre
export default function tareas(props){//listado contiene Items
  var contador = props.tareas.length
  const [contadorTerminadas,setContadorTerminadas] = useState(0) //lleva un contador solo de las tareas terminadas
  const aumentarContador = () => {//creamos una funcion de tipo flecha
    setContadorTerminadas(prev => prev + 1)// la funcion que asigna el estado puede devolver el estado actual "al vuelo"
  }

   const restaContador = () => { // creamos otra funcion mas para decrementar
    setContadorTerminadas(prev => prev - 1);
  }
  

  return(        
     /* asi estaba, pero esta mal
     <ul style={{color:'red'}}>
         <h1 >Total tareas agregadas:{contador} </h1>          
          {props.Listado.map(tarea => (          
          <Items item={tarea}/>          
        ))}        
        <h1 >Total tareas seleccionadas: </h1>
      </ul>
      */    

    <>
      <h1 style={{color:'blue'}}>Total tareas agregadas:{contador} </h1> {/* esta afuera del <ul. en el de arriba esta adentro */}
      <h1 style={{color:'green'}}>Total tareas seleccionadas: {contadorTerminadas} </h1> {/* esta afuera del <ul. en el de arriba esta adentro */}
      <ul >
          {
          props.tareas.map(tarea => (          
            <Items item={tarea} aumentar={aumentarContador} restar={restaContador} />       /* se le da a cada item la funcion para que 
            como hijos, puedan cambiar un valor en el padre */   
          ))
          }    
      </ul>      
    </>
    );
}