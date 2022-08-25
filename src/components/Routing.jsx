
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Cartlist } from './Cartlist'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { ProductForm } from './ProductForm/ProductForm'
import { Wishlist } from './Wishlist'
export const Routing = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product-form' element={<ProductForm/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cartlist' element={<Cartlist/>}/>
      </Routes>
    </>
  )
}
