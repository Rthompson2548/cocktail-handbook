import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react';

const searchByNameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);


  const fetchCocktails = async () => {

    setLoading(true);

    try {
      /** fetches the db searchByNameUrl for the drink in the input */
      const drinkInfo = await fetch(`${searchByNameUrl}${searchTerm}`);
      
      const cocktailInfo = await drinkInfo.json();

      const { drinks } = cocktailInfo;
     

      if (drinks) {
        const cocktailResults = drinks.map((cocktail) => {
          /** uses destructuring to extract the id, name, image, alcoholic & glass type of given drink */
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,  
            strCategory,
            strTags,
          } = cocktail;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            isAlcoholic: strAlcoholic,
            glassType: strGlass,
            category: strCategory,
            tags: strTags,
          }

        })

        /** sets the cocktail state to an array of the search results and renders the list if 1 or more results */
        setCocktails(cocktailResults);

      } else {
        setCocktails([]);
      }
    
      /** stops page from loading state if a cocktail is found */
      setLoading(false);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm,
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }
