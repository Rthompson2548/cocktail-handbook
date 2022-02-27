import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strTags: tags,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            tags,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      tags,
      instructions,
      ingredients,
    } = cocktail
    return (
      <div className='single-cocktail-container'>
        <article className='single-cocktail'>
          
          <div className='cocktail-info-text'>
            <h2 className='single-cocktail-name'>{name}</h2>
          <div>
              <img src={image} alt={name}></img>
          </div>           
                <h3>Category:</h3> <p>{category}</p>
                <h3>Type:</h3> <p>{info}</p>
                <h3>Glass:</h3> <p>{glass}</p>
                {/* only displays drink tags if present */}
            {tags ? <p><h3>Tags:</h3> <p>{tags}</p></p> : null}
            <h3 className='cocktail-ingredients-text'>Ingredients:</h3>
                <p className='cocktail-ingredients'>{ingredients.map((item, index) => {
                  return item ? <p key={index}> - {item}</p> : null
                })}</p>
                <h3>Instructions:</h3> {instructions}
                
            
           </div>
          <Link to='/' className='btn home-button'>
            View cocktails
          </Link>
      </article>
    </div>
    )
  }
}

