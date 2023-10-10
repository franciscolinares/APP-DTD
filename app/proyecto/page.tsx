'use client'
import React, { useState, FormEvent } from 'react';
import Tareas  from './tareas';

let nextId=0;

export default function List() {
  const [name, setName] = useState('');
  const [tareas, setTarea] = useState([]); 

   async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('formData: ',formData)
    const response = await fetch('/api/agregar', {
      method: 'POST',
     // body: formData,
    });
    console.log('response: ',response)
  }
  return(
    <>     
    <form onSubmit={onSubmit}>
      <h1 style={{color:'black', fontSize:'32px', border:'none', borderRadius:'4px'}}>Tareas</h1>
      <input        
        value={name}
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
              <Tareas tareas={tareas}/>        
            </div>
          </label>  
    </>
  );
}