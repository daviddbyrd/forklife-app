import { useState } from "react";
import DietInfo from "../components/DietInfo";

function Diets() {
  const [diet, setDiet] = useState("");
  const [show, setShow] = useState(false);

  function handleDiet(e) {
    setDiet(e.target.value);
    setShow(true);
  }

  return (
    <div className="background d-flex justify-content-center align-items-start pt-4 min-vh-100">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="pb-4">Diets</h1>

        <div>
          <button className="btn btn-primary rounded mx-3" value="glutenFree" onClick={handleDiet}>
            Gluten Free
          </button>
          <button className="btn btn-primary rounded mx-3" value="vegetarian" onClick={handleDiet}>
            Vegetarian
          </button>
          <button className="btn btn-primary rounded mx-3" value="vegan" onClick={handleDiet}>
            Vegan
          </button>
          <button className="btn btn-primary rounded mx-3" value="ketogenic" onClick={handleDiet}>
            Ketogenic
          </button>
          <button className="btn btn-primary rounded mx-3" value="paleo" onClick={handleDiet}>
            Paleo
          </button>
          <button className="btn btn-primary rounded mx-3" value="primal" onClick={handleDiet}>
            Primal
          </button>
          <button className="btn btn-primary rounded mx-3" value="whole30" onClick={handleDiet}>
            Whole30
          </button>
        </div>
        {show ? <DietInfo diet={diet} /> : <h4 className="pt-5">Click a diet to see info</h4>}
      </div>
    </div>
  );
}

export default Diets;
