
import React, { useState } from 'react'
import { getData, setData } from '../utils/functions'
import { CartItem } from './CartItem'

export const Cartlist = () => {
  const [cartlist, setCartList] = useState(getData('cartlist') || [])

  const handleWishlist = (id)=> {
    const wishlist = getData('wishlist') || []
    let wishlistProduct = wishlist.find(product=> product.id === id) 
    if(!wishlistProduct) {
     wishlistProduct = cartlist.find(product=> product.id === id)
     setData('wishlist', [...wishlist, wishlistProduct])
    }
    else {
     alert('product is already exist in wishlist')
    }
  }
  const handleCart = (id)=> {
    const list = cartlist.filter(product=> product.id !== id)
    setData('cartlist', list)
    setCartList(getData('cartlist'))
  }
  const handleQuantity = (id,x)=> {
    const list = cartlist.map(product => product.id === id ? {...product, qty: product.qty+x || 1}: product)
    setData('cartlist', list)
    setCartList(getData('cartlist'))
  }
  return (
    <div className='cartlist product-cont'>
      {
        cartlist.map((product)=> (
          <CartItem  product={product} handleQuantity={handleQuantity} handleWishlist={handleWishlist} handleCart={handleCart} key={product.id} />
        ))
      }
    </div>
  )
}
