'use client'
import React, { useState, FormEvent } from 'react';
import Tareas  from './tareas';
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';


let nextId=0;

export default function List() {
  const [name, setName] = useState(''); //variable de estado de react
  const [tareas, setTarea] = useState([]); 

   async function onSubmit(data) {
    //event.preventDefault();
  //  const formData = new FormData(event.currentTarget);
    //console.log('formData: ',formData)
    const response = await fetch('/api/agregar', {
      method: 'POST',           
      body: JSON.stringify({data})
    });
    const respuesta = await response.json()

    console.log('response: ',respuesta)
  }
  
  const edicionpadre = (id,nombre) => {       
   console.log('EP',id,nombre)     
   const  newTareas = tareas.map((tareas)=>{
    if (tareas.id === id){
      return{
        ...tareas,
        name: nombre,
      }
    }
    return tareas
   })
   setTarea(newTareas);
  };  

  const eliminarpadre = i => {  
    const  newTareas = tareas.filter((tareas) => tareas.id !== i);  
    setTarea(newTareas);
   }

   const {register , handleSubmit} =  useForm({
    defaultValues: {
      nombre: '',
    }})
    
    
  return(
    <>        
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{color:'black', fontSize:'32px', border:'none', borderRadius:'4px'}}>Tareas</h1>
      <input        
        //value={name}
        {...register('nombre')}
        onChange={e => setName(e.target.value)}
      />
      <button  style={{color:'black', fontSize:'20px', border:'none', borderRadius:'4px', background:'green'}} onClick={() => {
         if(Object.keys(name).length === 0 ) {
            alert('el campo no puede estar vacio')
            return
        }
          setTarea(
            [
              ...tareas,
              { id: nextId++, name: name }
            ]
          );          
          setName('');
        
      }} type='submit'>Agregar tarea</button>               
      </form>        
          <label  className="row">
            <div className="col-md-3" style={{border: '1px solid black'}}>
              <Tareas tareas={tareas}  eliminarpadre={eliminarpadre} edicionpadre={edicionpadre}/>        
            </div>
          </label>  
    </>
  );
}