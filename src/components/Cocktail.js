import React from 'react'
import { Link } from 'react-router-dom'
import CocktailList from './CocktailList'

const Cocktail = ({ id, name, image, info, isAlcoholic, category }) => {

  return (
    <article className='cocktail'>
      <h2 className='cocktail-name'>{name}</h2>
      <div>
        <img src={image} alt="image of drink" />
      </div>
      <div
        className='cocktail-info-text'
      >
        <h3>Type:</h3> <p>{isAlcoholic}</p>
        <h3>Category:</h3> <p>{category}</p>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">DETAILS</Link>
      </div>
    </article>
  )
}

export default Cocktail;