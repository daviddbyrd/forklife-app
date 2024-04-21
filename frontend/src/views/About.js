import forklifelogo from "../images/forklifelogo.png";

const About = () => {
  return (
    <div className="d-flex justify-content-center background vh-100">
      <div className="about d-flex flex-column align-items-center card rounded shadow">
        <h3>About ForkLife</h3>
        <p>
          ForkLife is your one stop shop for all things food and drink. We offer a number of 
          useful services. In the Recipe page, you can search for 
          recipes that you would like to follow. In the Meal Planner, you can get meal 
          recommendations based on your specifications. In the Diets page, you can see 
          information on many different types of diets. In the Food page, you can search for 
          food to see the nutrional information. In the Cocktail page, you can search for 
          Cocktails to make. We hope you enjoy using ForkLife!
        </p>
        <img className="navbar-brand mb-0 w-25" src={forklifelogo} alt="forklife logo"></img>
      </div>
    </div>
  )
}

export default About
