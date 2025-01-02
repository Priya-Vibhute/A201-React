import React, { useEffect, useState } from 'react'

function AreaOfRectangle() {

    let [length,setLength]=useState(0);
    let [breadth,setBreadth]=useState(0);
    let [area,setArea]=useState(0);

    useEffect(()=>{
      let value=setTimeout(()=>{
        setArea(length*breadth);
        console.log(area);
      },5000)

      return()=>{
        clearTimeout(value);
        console.log("clearing the timer")
      }
      
     
    },[length,breadth])
  return (
    <div>

      <input type="number" value={length} onChange={(e)=>{setLength(e.target.value)}} />
      <input type="number" value={breadth} onChange={(e)=>{setBreadth(e.target.value)}} />
      <h1>Area of Reactangle is {area}</h1>

      
    </div>
  )
}

export default AreaOfRectangle
