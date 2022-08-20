
import React from 'react'

export const Product = ({product, handleDelete, handleEdit}) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h5>{product.title}</h5>
      <p>{product.description.split(' ').slice(0, 15).join(' ')}...</p>
      <div className="price-rating">
        <span>Price: ${product.price}</span>
        <span>Rating: {product.rating.rate}</span>
      </div>
      <div className="edit-delete-btn">
        <button onClick={()=>handleEdit(product.id)}>Edit</button>
        <button onClick={()=> handleDelete(product.id)}>Delete</button>
      </div>
      <div className="cart-wishlist-btn">
        <button>Add To Cart</button>
        <button>Add To Wishlist</button>
      </div>
    </div>
  )
}
