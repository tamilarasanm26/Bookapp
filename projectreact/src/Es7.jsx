import React, { useEffect, useRef, useState } from 'react';

const Es7 =() => {
    const [name,setName] = useState("");
   
    
    const inputRef = useRef();

    console.log("Getting  rendered");

    useEffect(()=>{
    inputRef.current = name;
    },[name]);

    const display = () =>
        {
            console.log(inputRef.current);
            
            
        };
   
  return (
    <>
    <input 
    ref={inputRef}
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}  
    />
   <p>name is {name}</p>
   <p>name is {inputRef.current}</p>
   <button onClick={display}>click</button>
    </>
  )
}

export default Es7