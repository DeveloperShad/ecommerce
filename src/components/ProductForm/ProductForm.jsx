import './ProductForm.css'

import React, { useState } from 'react'
import { DropDownOption } from '../DropDownOption'
import { category} from '../../constants/data'
import {createProduct, updateProduct} from '../../store/actions/product'
import { initProduct } from '../../constants/data'
import { getData, removeData } from '../../utils/functions'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export const ProductForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [product, setProduct] = useState(getData('updateProduct') || initProduct)
  const [isEditId, setIsEditId] = useState(getData('updateProduct')?.id)
  const products = useSelector(state => state.products)
  // setProduct(products.find(product => product.id === isEdit))
  console.log('products', products)

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  // function to add the product in the products array
  // and set the data in local storage
  const handleAddProduct = (e) => {
    e.preventDefault()
    // here we are handling updating of the product in products array
    if(isEditId) {
      // alert(isEditId)
      dispatch(updateProduct(isEditId, product))
    }
    // here we are creating new products with 
    else {
      dispatch(createProduct(product))
    }
    removeData('updateProduct')
    setProduct(initProduct)
    navigate('/')
    setIsEditId('')
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
          <input type="text" name="rating" onChange={handleChange} value={product.rating} />
        </div>
        <div className="submit-btn">
          {/* <p></p> */}
          <input type="submit" name="submit" value="Add Product" id="" />
        </div>
      </form>
    </div>
  )
}
