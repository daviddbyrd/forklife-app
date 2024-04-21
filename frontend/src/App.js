import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./views/About";
import RecipeView from "./views/RecipeView";
import Diets from "./views/Diets";
import MealPlanner from "./views/MealPlanner";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;