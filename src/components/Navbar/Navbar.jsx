import React, { useContext, useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom'
import {Link} from 'react-scroll'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
  <img className='logo' src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <li> <Link to='header' smooth='true' offset={-10} duration={100}>Home</Link> </li>
        <li><Link to='explore-menu' smooth='true' offset={-20} duration={100}>Menu</Link></li>
        <li><Link to='app-download' smooth='true' offset={-102} duration={100}>Mobile App</Link></li>
        <li><Link to='footer' smooth='true' offset={-102} duration={500}>Contact Us</Link></li>

        {/* <a  onClick={()=>setMenu("Home")} className={`${menu==="Home"?"active":""}`}>Home</a>
        <a  onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>Menu</a>
        <a  onClick={()=>setMenu("mob-app")} className={`${menu==="mob-app"?"active":""}`}>Mobile app</a>
        <a  onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>Contact us</a> */}
       
      </ul> 
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount()>0?"dot":""}></div>
        </Link>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
