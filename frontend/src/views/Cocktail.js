import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
// import Wrapper from '../Assets/wrappers/CocktailPageWrap'
// import './Cocktail.css'
import styled from 'styled-components'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const Cocktail = () => {
  const { id } = useParams()
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const { data } = await axios.get(`${singleCocktailUrl}${id}`)
        setCocktail(data.drinks[0])
      } catch (error) {
        console.error('Error fetching cocktail:', error)
      }
    }

    fetchCocktail()
  }, [id])

  if (!cocktail) {
    return <div>Loading...</div> // Add loading state or spinner if needed
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = cocktail

  const validIngredients = Object.keys(cocktail)
    .filter((key) => key.startsWith('strIngredient') && cocktail[key] !== null)
    .map((key) => cocktail[key])

  return (
    <div>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">
              <span>ingredients</span> :
            </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span className="drink-data">instructions </span>
            {instructions}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cocktail
