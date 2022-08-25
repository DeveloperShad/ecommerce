import { NavLink } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { getInputValue } from "../store/actions/product"

export const Navbar = () => {
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    dispatch(getInputValue(event.target.value))
  }
  return (
    <nav>
      <NavLink to="/"><h1>WhyKart</h1></NavLink>
      <input type="search" onChange={handleSearch}  placeholder='Search a product by name of category' />
      <NavLink to='/product-form'>Product Form</NavLink>
      <NavLink to='/wishlist'>Wishlist</NavLink>
      <NavLink to='/cartlist'>Cart</NavLink>
    </nav>
  )
}
