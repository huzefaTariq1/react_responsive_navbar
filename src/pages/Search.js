import React from 'react'
import Navbar from '../navbar/Navbar'
import { useLocation } from 'react-router-dom'



const Search = () => {

  const queryString = useLocation().search
  const queryParam = new URLSearchParams(queryString)
  const q = queryParam.get('q')
  return (
    <div>
    <Navbar/>
     <h1>you search {q}</h1>
    </div>
  )
}

export default Search