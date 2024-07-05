import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Es6 from './Es6'
// import FetchData from './Fetchdata'
// import Es5 from './Es5'
// import Es7 from './Es7'
// import Es8 from './Es8'
import './App.css'
import Create from './CRUD/Create'
import Read from './CRUD/Read'
import Update from './CRUD/Update'

import Navigation from './Navigation'

function App() {
  return (
    <>

    {/* <h1>Crud</h1> */}
     {/* <Read/> */}
    {/* <Create/>  */}
     {/* <Create/> */}
    <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/update" element={<Update/>}/>
        {/* <Route path="/delete" element={<Delete/>}/> */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App