import React from 'react'
import logo from './headerlogo.jpg'
import {Link} from 'react-router-dom'
import './Header.css'
import { useStateValue } from '../functionality/StateProvider'
const Header = () => {
  const [{cart},dispatch]=useStateValue();
  console.log(cart)
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='header_logo' />
      <div className='header_search'>
        <input type={'text'} className="header_searchInput" placeholder="Search your item"/>
        </div>  
     <div className='header_nav'>
        <Link to="./" className='header_link'>
        <span>Reorder</span>
        <span><h4>My Items</h4></span>
        </Link>
        <Link to="./" className='header_link'>
        <span>Hi, Suresh</span>
        <span><h4>Account</h4></span>
        </Link>
        <Link to="./cart" className='header_link'>
        <span>Cart</span>
        <span><h4>{cart?.length}</h4></span>
        </Link>
        </div> 
    </div>
  )
}

export default Header
