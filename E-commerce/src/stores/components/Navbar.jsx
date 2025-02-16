import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'


const Navbar = () => {
  const { cartItems } =useCart()

  return (
    <>
      <div className='navsection'>
        <div className="title">
          <h2>E-Commerce</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search"/>
        </div>
        <div className="user">
          <div className="user-details">
              SighIN/signUP
          </div>
          <Link to='/cart'>
            <div className="cart">
                Cart
              <span>
                {cartItems.length}
              </span>
            </div>
          </Link>
          
        </div>
      </div>
      <div className='subMenu'>
        <ul>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          
          <Link to="/computers">
            <li>Computers</li>
          </Link>
         
          <Link to="/watches">
            <li>Watches</li>
          </Link>

          <Link to="/men">
            <li>Men Clothing</li>
          </Link>

          <Link to="/woman">
            <li>Women Dressing</li>
          </Link>
          
          <Link to="/furniture">
            <li>Furniture</li>
          </Link>

          <Link to="/ac">
            <li>AC</li>
          </Link>
          

          <Link to="/kitchen">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge">
            <li>Fridge</li>
          </Link>

          <Link to="/speaker">
            <li>Speaker</li>
          </Link>

          <Link to="/tv">
            <li>TV's</li>
          </Link>
         
      
        </ul>

      </div>
    </>
  )
}

export default Navbar
