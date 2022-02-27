import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const { cocktails, loading } = useGlobalContext();
  console.log(`cocktail list: ${JSON.stringify(cocktails)}`)
  if (loading) {
    return <Loading />

  } else if (cocktails.length < 1) {
    return <h2>No cocktails matched your search</h2>
  }

  return (
    <section className='cocktails'>
        {
          cocktails.map((cocktail) => {
            return <Cocktail key={cocktail.id} {...cocktail} />
          })
        }
      
    </section>
  )
}

export default CocktailList
