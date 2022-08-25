
import React, { useEffect, useState } from 'react'
import { DropDownOption } from './DropDownOption'
import { Product } from './Product'
import { Footer } from './Footer'
import { filterCategory } from '../constants/data'
import { getData, setData } from '../utils/functions'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../store/actions/product'
import { useNavigate } from 'react-router-dom'


export const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const useProducts = useSelector(state => state.products)
  const searchInputValue = useSelector(state => state.searchValue)
  const [products, setProducts] = useState(useProducts)
  const [filter, setFilter] = useState('')



  const handleFilter = (e) => {
    const para = e.target.value
    setFilter(para)
    // alert(para)
    // filter by price low to high
    para === 'PLH' && setProducts(products.sort((a, b) => a.price - b.price))
    // filter by price high to low
    para === 'PHL' && setProducts(products.sort((a, b) => b.price - a.price))
    // filter by rating low to high
    para === 'RLH' && setProducts(products.sort((a, b) => a.rating - b.rating))
    // filter by rating high to low
    para === 'RHL' && setProducts(products.sort((a, b) => b.rating - a.rating))
  }

  // function to delete the product by id
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  // Function to set form input and id for updating product
  const handleEdit = (id) => {
    const editeProduct = products.find(product => id === product.id)
    setData('updateProduct', editeProduct)
    navigate('/product-form')
  }

  
  const handleWishlist = (id)=> {
   const wishlist = getData('wishlist') || []
   let wishlistProduct = wishlist.find(product=> product.id === id) 
   if(!wishlistProduct) {
    wishlistProduct = products.find(product=> product.id === id)
    setData('wishlist', [...wishlist, wishlistProduct])
   }
   else {
    alert('product is already exist in wishlist')
   }
  }
  
  const handleCart = (id)=> {
    const cartlist = getData('cartlist') || []
    let cartProduct = cartlist.find(product=> product.id === id)
    if(!cartProduct) {
      cartProduct = products.find(product=> product.id === id)
      const cartProducts = [...cartlist,{...cartProduct, qty:1}]
      setData('cartlist', cartProducts)

    }
    else if(cartProduct) {
      const cartProducts = cartlist.map((product)=> product.id === id ? {...product, qty: ++product.qty} : product)
      setData('cartlist', cartProducts)

    }
  }

  useEffect(() => {
    setProducts(useProducts)
    return () => {
      
    }
  }, [useProducts, searchInputValue, filter])
  
// console.log('run outside useEffect')

  return (
    <div className="home">
      <div className="filter">
        <p>Filter By</p>
        <select onChange={handleFilter}>
          {
            filterCategory.map(option => <DropDownOption key={option.value} value={option.value} title={option.title} />)
          }
        </select>
      </div>
      <div className="product-cont">
        {
          products.filter(product => product.title.toLowerCase().includes(searchInputValue.toLowerCase()) || product.category.includes(searchInputValue)).map((product) => (
            <Product product={product} key={product.id} handleDelete={handleDelete} handleEdit={handleEdit} handleCart={handleCart} handleWishlist={handleWishlist} />
          ))
        }
      </div>
      <Footer name={'Anwar Shad'} />
    </div>
  )
}
