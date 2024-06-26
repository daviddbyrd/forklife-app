import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./views/About";
import RecipeView from "./views/RecipeView";
import Diets from "./views/Diets";
import MealPlanner from "./views/MealPlanner";
import FoodView from "./views/FoodView";
import Landing from './views/Landing'
import Cocktail from "./views/Cocktail";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/recipe" element={<RecipeView />} />
          <Route path="/diets" element={<Diets />} />
          <Route path="/mealplanner" element={<MealPlanner />} />
          <Route path="/food" element={<FoodView />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;