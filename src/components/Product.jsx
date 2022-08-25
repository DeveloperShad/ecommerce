
import React from 'react'

export const Product = ({product, handleDelete, handleEdit, handleCart, handleWishlist}) => {
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
      <div className="edit-delete-btn">
        <button onClick={()=>handleEdit(product.id)}>Edit</button>
        <button onClick={()=> handleDelete(product.id)}>Delete</button>
      </div>
      <div className="cart-wishlist-btn">
        <button onClick={()=>handleCart(product.id)}>Add To Cart</button>
        <button onClick={()=>handleWishlist(product.id)}>Add To Wishlist</button>
      </div>
    </div>
  )
}
