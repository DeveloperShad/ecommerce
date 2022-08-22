
import React, { useState } from 'react'
import { DropDownOption } from './DropDownOption'
import { Product } from './Product'
import { Footer } from './Footer'
import { filterCategory } from '../constants/data'
import { getData, setData, validateFormInput } from '../utils/functions'
import { products as prod } from '../constants/data'
import { initProduct } from '../constants/data'
import { ProductForm } from './ProductForm/ProductForm'
import { Navbar } from './Navbar'



export const Home = () => {

  const [products, setProducts] = useState(getData('products') || prod)
  const [wishlist, setWishlist] = useState(getData('wishlist') || [])
  const [cartlist, setCartlist] = useState(getData('cartlist') || [])
  const [product, setProduct] = useState(initProduct)
  const [filter, setFilter] = useState('')
  const [isEdit, setIsEdit] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')


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
    const updatedProducts = products.filter(product => product.id !== id)
    setData('products', updatedProducts)
    setProducts(getData('products'))
  }

  // Function to set form input and id for updating product
  const handleEdit = (id) => {
    const editeProduct = products.find(product => id === product.id)
    console.log('editProduct', editeProduct)
    setProduct(editeProduct)
    setIsEdit(id)
    setShowForm(true)
  }

  // function to get form input field
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  // function to add the product in the products array
  // and set the data in local storage
  const handleAddProduct = (e) => {
    e.preventDefault()
    
    // validating form input field
    validateFormInput(product)
    
    // here we are handling updating of the product in products array
    if(isEdit) {
      const updatedProducts = products.map(item => item.id === isEdit ? {...item, ...product} : item )
      setData('products',updatedProducts)
      setProducts(getData('products'))
    }
    // here we are creating new products with 
    else {
      const newProducts = [...products,product ]
      setData('products', newProducts)
      setProducts(getData('products'))
   
    }
    setProduct(initProduct)
    setShowForm(false)
    setIsEdit('')
  }

  // handle toggle form show
  const handleShowForm = (x)=> {
    setShowForm(x)
  }

  // handling search by keyword
  const handleSearch = (e)=> {
    console.log(e.target.value)
    setSearchKeyword(e.target.value)
    // console.log(products)
  }

  const handleWishlist = (id)=> {

  }
  const handleCart = (id)=> {

  }

  return (
    <div className="home">
      <Navbar handleSearch = {handleSearch} handleShowForm = {handleShowForm} searchKeyword = {searchKeyword}  showForm = {showForm} setShowForm = {setShowForm} />
      {showForm && <ProductForm handleChange={handleChange} handleAddProduct={handleAddProduct} product={product} />}
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
          products.filter(product => product.title.toLowerCase().includes(searchKeyword.toLowerCase()) || product.category.includes(searchKeyword)).map((product) => (
            <Product product={product} key={product.id} handleDelete={handleDelete} handleEdit={handleEdit} handleCart={handleCart} handleWishlist={handleWishlist} />
          ))
        }
      </div>
      <Footer name={'Anwar Shad'} />
    </div>
  )
}
