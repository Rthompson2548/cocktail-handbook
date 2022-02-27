import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <h1 className='nav-bar-name'>Cocktail Finder</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
