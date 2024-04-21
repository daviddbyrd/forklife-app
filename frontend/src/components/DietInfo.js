import glutenFreeImg from "../images/glutenFree.jpg";
import vegetarianImg from "../images/vegetarian.jpg";
import veganImg from "../images/vegan.jpg";
import ketogenicImg from "../images/ketogenic.jpg";
import paleoImg from "../images/paleo.jpg";
import primalImg from "../images/primal.jpg";
import whole30Img from "../images/whole30.jpg";

function DietInfo({ diet }) {
  const dietText = {
    glutenFree:
      "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated). A gluten-free diet may be based on gluten-free foods, such as meat, fish, eggs, milk and dairy products, legumes, nuts, fruits, vegetables, potatoes, rice, and corn. Gluten-free processed foods may be used.",
    vegetarian:
      "A vegetarian diet does not include any meat, poultry, or seafood. It is a meal plan made up of foods that come mostly from plants. These include vegetables, fruits, whole grains, legumes, seeds and nuts. Dairy products and eggs are included",
    vegan:
      "A vegetarian diet does not include any meat, poultry, or seafood. It is a meal plan made up of foods that come mostly from plants. These include vegetables, fruits, whole grains, legumes, seeds and nuts. Dairy products and eggs are not included.",
    ketogenic:
      "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.",
    paleo:
      "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.",
    primal:
      "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup. Ingredients not allowed include legumes (e.g. beans and lentils), grains, refined sugar, and processed foods. Dairy products are allowed",
    whole30:
      "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.",
  };

  const dietImage = {
    glutenFree: glutenFreeImg,
    vegetarian: vegetarianImg,
    vegan: veganImg,
    ketogenic: ketogenicImg,
    paleo: paleoImg,
    primal: primalImg,
    whole30: whole30Img,
  };

  return (
    <div className="diet-info">
      <h2>Diet info</h2>
      <p>{dietText[diet]}</p>
      <img className="diet-img" src={dietImage[diet]} alt="" />
    </div>
  );
}

export default DietInfo;
