import axios from "axios";
import { useState } from "react";
import MealPlannerForm from "../components/MealPlannerForm";
import MealList from "../components/MealList";
import { Link } from "react-router-dom";

function MealPlanner() {
  const API_KEY = "2ddd2715a5d94d8c86b2e9b5d4ea0f5d";
  const [mealsData, setMealsData] = useState([]);
  const [calories, setCalories] = useState("");
  const [diet, setDiet] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${parseInt(
          calories
        )}&diet=${diet}`
      );
      setMealsData(response.data);
      setError("");
      setShow(true);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error(error);
    }
    console.log(mealsData);
  }

  function handleCalories(e) {
    setCalories(e.target.value);
  }

  function handleDiet(e) {
    setDiet(e.target.value);
  }

  return (
    <div className="background d-flex justify-content-center align-items-start pt-4 min-vh-100">
      <section className="meal-planner">
        <h1>Search meals for today</h1>
        <MealPlannerForm
          onSubmit={handleSubmit}
          onCaloriesChange={handleCalories}
          onDietChange={handleDiet}
        />
        {error && <p>{error}</p>}
        {show  && <MealList meals={mealsData} /> }
        <Link to="/diets"><p className="pb-3">Info about diets</p></Link>
      </section>
    </div>
  );
}

export default MealPlanner;
