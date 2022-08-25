
import React, { useState } from 'react'
import { getData, setData } from '../utils/functions'
import { WishItem } from './WishItem'

export const Wishlist = () => {
  const [wishList, setWishList] = useState(getData('wishlist') || [])


  const handleWishlist = (id)=> {
    const wishlist = getData('wishlist').filter(item => item.id !== id)
    setData('wishlist', wishlist)
    setWishList(getData('wishlist'))
  }

  const handleCart = (id)=> {
    const cartlist = getData('cartlist') || []
    let cartProduct = cartlist.find(product=> product.id === id)
    if(!cartProduct) {
      cartProduct = wishList.find(product=> product.id === id)
      const cartProducts = [...cartlist,{...cartProduct, qty:1}]
      setData('cartlist', cartProducts)

    }
    else if(cartProduct) {
      const cartProducts = cartlist.map((product)=> product.id === id ? {...product, qty: ++product.qty} : product)
      setData('cartlist', cartProducts)

    }
  }

  return (
    <div className='wishlist product-cont'>
      
      {
        wishList.map((product) => (
          <WishItem product = {product} handleWishlist = {handleWishlist} handleCart = {handleCart} key={product.id}/>
        ))
      }
    </div>
  )
}
