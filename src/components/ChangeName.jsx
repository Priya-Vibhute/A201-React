import React, { useState } from 'react'

function ChangeName() {
    let [name,setName]=useState("Nisha")
    const ChangeValue=()=>{
        setName(prev=>{
            console.log(prev)
        })
        setName("Janki");
       
        console.log(name);
    }
  return (
    <div>
        <h1 onClick={ChangeValue}>{name}</h1>
    </div>
  )
}

export default ChangeName
