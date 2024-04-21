import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Food from "./Food";

function FoodSearch() {
  const [food, setFood] = useState(null);
  const [search, setSearch] = useState('banana');
  const [query, setQuery] = useState('banana');
  const [error, setError] = useState('');

  const getFood = async () => {
    try {
      console.log(query);
      const response = await axios.get(
      `http://localhost:4000/food/${query}`
      )
      console.log(response.data);
      setFood(response.data);
      setError('');
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error(error);
    }
  }

  useEffect(() => {
    getFood();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setFood(null);
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="background d-flex justify-content-center align-items-center flex-column min-vh-100 pt-4">
      <h1>Search food</h1>
      <div className="d-flex justify-content-center min-vh-100">
        <form onSubmit={getSearch} >
          <div className="input-group mt-3">
            <input type="text" className="form-control rounded mx-3" value={search} onChange={e => setSearch(e.target.value)} />
            <button type="submit" className="btn btn-primary rounded mx-3">Search</button>
          </div>
          {error ? <p>{error}</p> : 
            (food &&
              <div>
                <Food
                  name={food.food.knownAs}
                  image={food.food.image}
                  calories={food.food.nutrients.ENERC_KCAL}
                  protein={food.food.nutrients.PROCNT}
                  fat={food.food.nutrients.FAT}
                  carbs={food.food.nutrients.CHOCDF}
                  fiber={food.food.nutrients.FIBTG}
                /> 
              </div>
            )
          }
        </form>
      </div>
    </div>
  );
}

export default FoodSearch;