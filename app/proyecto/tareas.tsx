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
  
  let con=0;     
  const eliminar = id => {
    console.log('eliminar', id) 
    props.eliminarpadre(id)   
   }

  const edicion = i => {       
    props.edicionpadre(i)              
  };  

  return(        
    <>
      <h1 style={{color:'blue'}}>Total tareas agregadas:{contador} </h1> {/* esta afuera del <ul. en el de arriba esta adentro */}
      <h1 style={{color:'green'}}>Total tareas seleccionadas: {contadorTerminadas} </h1> {/* esta afuera del <ul. en el de arriba esta adentro */}
      <ul >
          {
          props.tareas.map(tarea => (          
            <Items item={tarea} aumentar={aumentarContador} restar={restaContador} edicion={edicion} eliminar={eliminar}/>       /* se le da a cada item la funcion para que 
            como hijos, puedan cambiar un valor en el padre */   
          ))
          }    
      </ul>      
    </>
    );
}