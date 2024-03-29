import React from 'react'
// import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'; 
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="leftSide">
            {/* <img src="{Logo}"/> */}
            <img src="https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pizzaLogo.png?raw=true" alt="logo" />
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
