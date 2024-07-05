import React,{useState} from 'react'

const Es6 = () => {
    const [count,setCount] = useState(1);
let x = 1;
const handleAdd=()=>{
    // x = x + 1;
    // console.log("x",x);
    setCount((count)=>{
    return count+1;
    
    });
 };
console.log(count);
  return (
    <>
    <h1 >{count}</h1>
    <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default Es6;