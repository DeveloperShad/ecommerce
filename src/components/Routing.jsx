
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { ProductForm } from './ProductForm/ProductForm'

export const Routing = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<ProductForm/>}/>
      </Routes>
    </>
  )
}
