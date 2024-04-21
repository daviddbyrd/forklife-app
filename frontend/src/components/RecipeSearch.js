import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from "./Recipe";

function RecipeSearch() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('steak');
  const [query, setQuery] = useState('steak');
  const [error, setError] = useState('');

  const getRecipes = async () => {
    try {
      console.log(query);
      const response = await axios.get(
      `http://localhost:4000/recipes/${query}`
      )
      console.log(response.data);
      setRecipes(response.data);
      setError('');
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error(error);
    }
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setRecipes([]);
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="background d-flex justify-content-center align-items-center flex-column min-vh-100 pt-4">
      <h1>Search recipes</h1>
      <div className="d-flex justify-content-center min-vh-100">
        <form onSubmit={getSearch} >
          <div className="input-group mt-3">
            <input type="text" className="form-control rounded mx-3" value={search} onChange={e => setSearch(e.target.value)} />
            <button type="submit" className="btn btn-primary rounded mx-3">Search</button>
          </div>
          {error ? <p>{error}</p> :
          <div>
            {recipes.map(recipe => (
              <Recipe 
                key={recipe.recipe.label} 
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                url={recipe.recipe.shareAs}
              /> 
            ))}
          </div>
          }
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default RecipeSearch;