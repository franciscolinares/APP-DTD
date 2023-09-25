import React from 'react';
import Tareas from './tareas';

export default function App (){
  return (
    <div className="App">
      <div className="App-content">
          <div style={{color:'black', fontSize:'32px'}}>
            TAREAS
          </div>         

        <Tareas />
      </div>
    </div>
  );
}