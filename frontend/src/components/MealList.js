import Meal from "./Meal";

function MealList({ meals }) {
  return (
    <div className="recipe-result d-flex flex-column align-items-center card rounded shadow">
      <section className="meals-section">
        <h2>Meals</h2>
        {meals.meals &&
          meals.meals.map((meal, index) => {
            return (
              <Meal
                key={index}
                title={meal.title}
                url={meal.sourceUrl}
                imageID={meal.id}
                imageType={meal.imageType}
              />
            );
          })}
        <h2>Nutrients</h2>
        {meals.nutrients ? (
          <div className="nutrients">
            <p>Calories: {meals.nutrients.calories}</p>
            <p>Carbohydrates: {meals.nutrients.carbohydrates}</p>
            <p>Fat: {meals.nutrients.fat}</p>
            <p>Protein: {meals.nutrients.protein}</p>
          </div>
        ) : (
          <div className="nutrients">
            <p>Calories: </p>
            <p>Carbohydrates: </p>
            <p>Fat: </p>
            <p>Protein: </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default MealList;
