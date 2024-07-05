import React from 'react'
import { useState } from 'react';
function Es8() {
    const [count, setCount] =useState(0);
    const [dark, setTheme] =useState(false);
    
    const doubleNum = slowFun(count);
    const themeStyle = {
        backgroundColor : dark? "black" : "white",
        color: dark?"white":"black",
    };

  return (
    <>
    <input type="number" 
    value={count}
    onChange={(e) => setCount(e.target.value)}
    />
    <button onClick={()=>setTheme((curr) => !curr)}>Change theme</button>
    <div style={themeStyle}>Tamil</div>
    </>
  )
}

export default Es8

function slowFun(c){
    for(let i=0;i<1000000000;i++)
        {
         return c *2;
        }
}