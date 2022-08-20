
import {Link} from  'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
      <input type="search" placeholder='Search a product by name of category' />
      <Link to="/">Home</Link>
      <Link to="/form">Add Product</Link>
    </nav>
  )
}
