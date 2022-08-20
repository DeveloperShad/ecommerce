import './ProductForm.css'

import React, { useState } from 'react'
import { DropDownOption } from '../DropDownOption'
import {initProduct, category} from '../constants/data'

export const ProductForm = () => {

  const [product, setProduct] = useState(initProduct)
  console.log(product);
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])


  const handleChange = (event) => {
      event.target.name === 'rating' ? setProduct({ ...product, rating:{...product.rating,rate:event.target.value}})
      : setProduct({ ...product, [event.target.name]: event.target.value })
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    setProducts({ ...products, ...product, id: Math.random() })
    localStorage.setItem('products', JSON.stringify(products))
    console.log(product)
  }

  return (
    <div className="add-product">
      <h2>Add Your Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className="name">
          <p>Name:</p>
          <input type="text" name="title" onChange={handleChange} value={product?.title} />
        </div>
        <div className="image">
          <p>Image:</p>
          <input type="text" name="image" onChange={handleChange} value={product?.image} />
        </div>
        <div className="description">
          <p>Description:</p>
          <textarea name="description" id="" cols="30" rows="5" onChange={handleChange} value={product?.description}></textarea>
        </div>
        <div className="price">
          <p>Price:</p>
          <input type="text" name="price" onChange={handleChange} value={product?.price} />
        </div>
        <div className="category">
          <p>Category:</p>
          <select name="category" onChange={handleChange}>
            {
              category.map(option => <DropDownOption key={option.value} value={option.value} title={option.title}/>)
            }
          </select>
        </div>
        <div className="rating">
          <p>Rating:</p>
          <input type="text" name="rating" onChange={handleChange} value={product.rating.rate} />
        </div>
        <div className="submit-btn">
          <p></p>
          <input type="submit" name="submit" value="Add Product" id="" />
        </div>
      </form>
    </div>
  )
}
