import forklifelogo from "../images/forklifelogo.png";

const About = () => {
  return (
    <div className="d-flex justify-content-center background vh-100">
      <div className="about d-flex flex-column align-items-center card rounded shadow">
        <h3>About ForkLife</h3>
        <p>
          Welcome to ForkLife, where culinary excellence meets mixology mastery.
          At ForkLife, we're passionate about the art of food and cocktails, and
          we're here to elevate your dining and drinking experience to new
          heights. Our mission is simple: to inspire and delight your palate with
          a symphony of flavors, textures, and aromas. Whether you're a seasoned
          foodie or a cocktail connoisseur, we invite you to embark on a journey
          with us through the world of gastronomy. From tantalizing recipes and
          culinary tips to innovative cocktail creations and mixology techniques,
          ForkLife is your ultimate destination for all things delicious. Join us
          as we explore the intersection of food and drink, celebrating the joy of
          eating and imbibing with style and sophistication. Cheers to good food,
          great drinks, and unforgettable moments. Welcome to ForkLife—where every
          bite and sip is a culinary adventure.
        </p>
        <img className="navbar-brand mb-0 w-50" src={forklifelogo} alt="forklife logo"></img>
      </div>
    </div>
  )
}

export default About
