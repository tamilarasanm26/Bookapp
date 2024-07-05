import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
function Navigation() {
  return (
    <>
    <div className='nav'>
   <button className='bt'> <Link to="/create">Create</Link></button>
    <button className='bt'><Link to="/read">Read</Link></button>
   {/* <button className='bt'><Link to="/update">Update</Link></button> */}
    </div>
    </>
  )
}

export default Navigation