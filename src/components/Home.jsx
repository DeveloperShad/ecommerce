
import React, { useEffect, useState } from 'react'
import { DropDownOption } from './DropDownOption'
import axios from 'axios'
import { Product } from './Product'
import { Footer } from './Footer'
import {filterCategory} from './constants/data'



export const Home = () => {

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(false)
  // const [isEdit, setIsEdit] = useState(false)

  const handleFilter = (e)=> {
    const para = e.target.value
    setFilter(para)
    // alert(para)
    // filter by price low to high
    para === 'PLH' && setProducts(products.sort((a,b)=> a.price - b.price))
    // filter by price high to low
    para === 'PHL' && setProducts(products.sort((a,b)=> b.price - a.price))
    // filter by rating low to high
    para === 'RLH' && setProducts(products.sort((a,b)=> a.rating.rate - b.rating.rate)) 
    // filter by rating high to low
    para ==='RHL' && setProducts(products.sort((a,b)=> b.rating.rate - a.rating.rate))
  }

  const handleDelete = (id)=> {
    const updatedProducts = products.filter(product => product.id !== id)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
    setProducts(updatedProducts)
  }

  const handleEdit = (id)=> {
    // alert(id)

  }


  useEffect(() => {
    // first time getting products from api
    !products.length && getProducts()
    console.log(products)
  
    return () => {
      console.log('cleanup')
    }
  }, [filter, products])

  function getProducts(){
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
    .then(result=> {
      // alert('function called')
      localStorage.setItem('products', JSON.stringify(result.data))
      setProducts(JSON.parse(localStorage.getItem('products')) || [])
      setLoading(false)
    })
    .catch(err=> {
      console.log(err)
      setLoading(false)
    })
  }
  
  

  return (
    loading ? <h1>Loading...</h1>:
    <div className="home">
      <div className="filter">
        <p>Filter By</p>
        <select onChange={handleFilter}>
          {
            filterCategory.map(option => <DropDownOption key={option.value} value={option.value} title={option.title}/>)
          }
        </select>
      </div>
      <div className="product-cont">
        {
          products.map((product) => (
            <Product product={product} key={product.id} handleDelete={handleDelete} handleEdit ={handleEdit}/>
          ))
        }
      </div>
      <Footer name={'Anwar Shad'}/>
    </div>
  )
}
