import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">  
        <Link to="/">
        <h1 className='nav-bar-name'>MIXOLOGY CENTRAL</h1>
        <p className='nav-bar-header'>Find your favorite drinks and discover new ones</p>
        </Link>

    </nav>
  )
}

export default Navbar
