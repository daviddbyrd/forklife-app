import React from 'react'
import '../Recipe.css'

const Recipe = ({ title, image, ingredients, url }) => {
  return(
    <div className="recipe-result d-flex flex-column align-items-center card rounded shadow">
      <h1>{title}</h1>
      <h6>Indegrients</h6>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <a href={url}>See details</a>
      <img src={image} />
    </div>
  )
}

export default Recipe;