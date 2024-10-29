import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      
      <div className="header-contents">
        <h2>Order your <br />favourite food here </h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with finest ingredient and culinary expertise. Our mission is to satisfy your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
