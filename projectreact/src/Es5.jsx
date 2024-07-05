import React, { useEffect, useState } from 'react'
import {Home1 as H1} from './Home';
function Es5() {
  const userData={
    name:"John Doe",
    age:30,
    job:"Software Engineer",
}
const [num1,setNum1]=useState(100);
const [num2,setNum2]=useState(1000);
useEffect(()=>{
  // setNum1(200);
  console.log("start ");
  return ()=>{
    setNum1(100);
    console.log("memory clean");
  }
},
[num1,num2]
);
//console.log("num1",num1);
  return (
    <>
     <H1 
    // name={userData.name}
    // age={userData.age}
    // job={userData.job}
    // {...userData}
/>
    <p>{num1}</p>
    <button onClick={()=>setNum1((c) => c + 1)}>Click</button>
    <p>{num2}</p>
    <button onClick={()=>setNum2((c) => c + 1)}>Click</button>
    </>
  )
}

export default Es5