import React from 'react';

//var cont = 0; // vamos a evitar el uso de var, para este framework "no esta permitido"
//cont = 0 es usado de manera global al ser declarada como var | el problema de var es que no va sincronizada con el render
// en pocas palabras trabajan en deferentes tiempos por lo cual lleva al problema del desface de visualizacion
export default function item(props){   
  const handleChange = (event) => {                   
        if (event.target.checked) {
          //cont++         
        //  console.log('true ',cont);// solo es usado para imprimirse en la consola
          props.aumentar()//llamado al metodo definido en el padre y que llego aqui como prop
        } else {
          props.restar()         //llamado al metodo definido en el padre y que llego mediante el prop 
          //console.log('false ',cont);// solo es usado para imprimirse en la consola
        }        
  }; 

  const Editar= () =>{
    props.edicion(props.item.id)
  }

  const Delete= () =>{
    props.eliminar(props.item.id)
  }
  return(//(*err1) aqui no se usa el valor cont, solo en el handleChange de arriba pero no tiene caso 
        <li key={props.item.id}>
          <input type="checkbox" disabled="" onChange={handleChange}/> {props.item.name} 
          <button style={{color:'black', fontSize:'20px', border:'none', borderRadius:'4px', background:'white'}} onClick={() => Editar(props.item.id)}>Editar</button>
           <button style={{color:'black', fontSize:'20px', border:'none', borderRadius:'4px', background:'white'}} onClick={() => Delete(props.item.id)}>Eliminar</button>
        </li>                    
      
    );
}