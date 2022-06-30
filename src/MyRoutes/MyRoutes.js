import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';
  import Home from '../pages/Home'
  import Search from '../pages/Search'

const MyRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/search' element={<Search/>}></Route> 
          <Route path='*' element={<div>404 Not Found</div>}></Route>  
        </Routes>
        </>
  )
}

export default MyRoutes 