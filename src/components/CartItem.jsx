
import React from 'react'

export const CartItem = ({ product, handleCart, handleWishlist, handleQuantity }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="other-details">
        <h5>{product.title}</h5>
        <h6>{product.category}</h6>
        <p>{product.description.split(' ').slice(0, 15).join(' ')}...</p>
        <div className="price-rating">
          <span>Price: ${product.price.toFixed(0) * product.qty}</span>
          <span>Qty: 
            <button onClick={()=>handleQuantity(product.id, -1)}><i className="fas fa-minus"></i></button>
            {product.qty}
            <button onClick={()=> handleQuantity(product.id, 1)}><i className="fas fa-plus"></i></button>
          </span>
          <span>Rating: {product.rating}</span>
        </div>
        <div className="cart-wishlist-btn">
          <button onClick={() => handleCart(product.id)}>Remove From Cart</button>
          <button onClick={() => handleWishlist(product.id)}>Add To Wishlist</button>
        </div>
      </div>
    </div>
  )
}
