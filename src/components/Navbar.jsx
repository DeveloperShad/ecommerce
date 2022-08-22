
export const Navbar = ({showForm, handleWishlist, handleCart, handleSearch, handleShowForm}) => {
  return (
    <nav>
      <h1>WhyKart</h1>
      <input type="search" onChange={handleSearch}  placeholder='Search a product by name of category' />
      <button onClick={()=>handleShowForm(!showForm)}>{showForm? 'Hide Form': 'Product Form'}</button>
      <button onClick={handleWishlist}>Wishlist</button>
      <button onClick={handleCart}>Cart</button>
    </nav>
  )
}
