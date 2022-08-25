
import React from 'react'

export const WishItem = ({product, handleCart, handleWishlist}) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h5>{product.title}</h5>
      <h6>{product.category}</h6>
      <p>{product.description.split(' ').slice(0, 15).join(' ')}...</p>
      <div className="price-rating">
        <span>Price: ${product.price}</span>
        <span>Rating: {product.rating}</span>
      </div>
      <div className="cart-wishlist-btn">
        <button onClick={()=>handleCart(product.id)}>Add To Cart</button>
        <button onClick={()=>handleWishlist(product.id)}>Remove From Wishlist</button>
      </div>
    </div>
  )
}
