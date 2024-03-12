import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './couter';
import Team from './Team';
import Users from './users';
import Friends from './friends';

function App() {

      function handleClick (){
        alert('button clicked');
      }
 
      const handleClick2 =()=>{
        alert('button 2 clicked');
      }
      
      const addToFive = (number) =>{
        alert(number + 5);
      }

  return (
    <>
     <h3>React Core Concepts 2</h3>
     <Friends></Friends>
     <Users></Users>
     <Team></Team>
     <Counter></Counter>
     <button onClick = {handleClick}>Click Me</button>
     <button onClick = {handleClick2}>Click Me 2</button>
     <button onClick = {()=>{
      alert('button clicked 3')
     }}>Click Me 3</button>
     {/* vejailla */}
     <button onClick ={()=>addToFive(3)}
     >Click Me 4</button>
      
      
    </>
  )
}

export default App
