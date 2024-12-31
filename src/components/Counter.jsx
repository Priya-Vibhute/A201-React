import React, { useState } from 'react'


function Counter() {
    let [count,setCount]=useState(0);
   
    const increment=()=>{

        setCount(count=count+1);


    }
    const decrement=()=>{
       
        setCount(count=count-1);


    }

  return (
    <div>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
