import React, { useEffect, useState } from 'react'

function PositiveNegative() {
    let[inputValue,setInputValue]=useState(0);
    let[answer,setAnswer]=useState("");

    const handleChange=(e)=>{
        
        setInputValue(e.target.value);
    }

    useEffect(()=>{

        if(inputValue==='')
        {
            setAnswer('')
        }
        else
        {
            let v=parseInt(inputValue);
            if(v%2==0)
                setAnswer("Even")
            else
                setAnswer("Odd")
        }
     
    },[inputValue])
  return (
    <div>

        <input type="number" onChange={handleChange} value={inputValue}/>
        <h1>{answer}</h1>
      
    </div>
  )
}

export default PositiveNegative
