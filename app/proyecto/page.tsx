'use client'
import React, { useState } from 'react';
import Tareas  from './tareas';

let nextId=0;

export default function List() {
  const [name, setName] = useState('');
  const [tareas, setTarea] = useState([]);

  return(
    <>     
      <h1 style={{color:'black', fontSize:'32px', border:'none', borderRadius:'4px', align:'center'}}>Tareas</h1>
      <input        
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button style={{color:'black', fontSize:'20px', border:'none', borderRadius:'4px', background:'green'}} onClick={() => {
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
        
      }}>Agregar tarea</button>               
        <form>
          <label  className="row">
            <div className="col-md-3" style={{border: '1px solid black'}}>
              <Tareas Listado={tareas}/>        
            </div>
          </label>
        </form>     
    </>
  );
}