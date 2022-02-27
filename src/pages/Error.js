import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
      <h1>Error</h1>
      <Link to="/">
      <button className='btn'>
        BACK TO HOME PAGE
      </button></Link>
    </section>
  )
}

export default Error
