// import React, {useState } from 'react'

function Home1(props) {
    // const [num1,setNum1]=useState(100);
  return (
    <>
      <h1>welcome</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.job}</h1>
      {/* <p>{num1}</p> */}
    </>
  )
}
function Home2() {
  return (
    <>
      <h1>end</h1>
    </>
  )
}

export  {Home1,Home2}
