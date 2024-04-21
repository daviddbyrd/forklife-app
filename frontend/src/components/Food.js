import React from 'react'

const Food = ({ name, image, calories, protein, fat, carbs, fiber }) => {
  return(
    <div className="recipe-result d-flex flex-column align-items-center card rounded shadow">
      <h4>Nutritional information for {name}</h4>
      <ul>
        <li>Calories: {calories} kcal</li>
        <li>Protein: {protein} g</li>
        <li>Fat: {fat} g</li>
        <li>Carbohydrates: {carbs} g</li>
        <li>Fiber: {fiber} g</li>
      </ul>
      <img src={image} />
    </div>
  )
}

export default Food;