function MealPlannerForm({ onSubmit, onCaloriesChange, onDietChange }) {
  return (
    <form className="meal-form input-group align-items-center" onSubmit={onSubmit}>
      <label htmlFor="caloriesInput">Calories for one day: </label>
      <input id="caloriesInput" type="number" className="form-control rounded mx-3" onChange={onCaloriesChange}/>
      <label htmlFor="diet-select" for="InputField">Select diet: </label>
      <select name="diets" id="diet-select" onChange={onDietChange}>
        <option value="">Regular diet</option>
        <option value="gluten-free">Gluten Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="paleo">Paleo</option>
        <option value="primal">Primal</option>
        <option value="whole30">Whole30</option>
      </select>
      <button className="meal-button btn btn-primary rounded mx-3" type="submit">
        Search
      </button>
    </form>
  );
}

export default MealPlannerForm;

