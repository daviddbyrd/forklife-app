import { Link } from "react-router-dom";
import forklifelogo from "../images/forklifelogo.png";

function Navbar() {
  return (
    <nav className='navbar navbar-light navbar-expand-sm bg-white'>
      <div className="container">
        <Link to="/" className="nav-link">
          <img className="navbar-brand mb-0 forklifelogo" src={forklifelogo} alt="forklife logo"></img>
        </Link>
        <Link to="/recipe" className="nav-link fs-5">Recipe Search</Link>
        <Link to="/mealplanner" className="nav-link fs-5">Meal Planner</Link>
        <Link to="/diets" className="nav-link fs-5">Diets</Link> 
        <Link to="/" className="nav-link fs-5">About</Link>
      </div> 
    </nav>
  );
}

export default Navbar;
