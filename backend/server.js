import express from "express"
import axios from "axios"
import cors from "cors"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

app.get('/recipes/:query', async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${process.env.RECIPE_APP_ID}&app_key=${process.env.RECIPE_APP_KEY}`
  )
  console.log(response.data.hits)
  res.json(response.data.hits)
})

app.get('/food/:query', async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/api/food-database/v2/parser?ingr=${req.params.query}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`
  )
  console.log(response.data)
  res.json(response.data)
})

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`)
})