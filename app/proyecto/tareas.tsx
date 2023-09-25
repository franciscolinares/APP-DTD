'use client'
import React, { useState } from 'react';

let nextId=0;

export default function List() {
  const [name, setName] = useState('');
  const [tareas, setTarea] = useState([]);

  return(
    <>     
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button style={{color:'black', fontSize:'20px', border:'none', borderRadius:'4px', background:'green'}} onClick={() => {
        setTarea(
          [
            ...tareas,
            { id: nextId++, name: name }
          ]
        );
        setName('');
      }}>Agregar tarea</button>
      <ul style={{color:'red'}}>
        {tareas.map(tarea => (
          <li key={tarea.id}>{tarea.name}</li>
        ))}
      </ul>
    </>
  );
}