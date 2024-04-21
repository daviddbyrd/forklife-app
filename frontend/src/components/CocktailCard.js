import { Link } from 'react-router-dom'
// import Wrapper from '../Assets/wrappers/CocktailCard.js'

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <div>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          More Info
        </Link>
      </div>
    </div>
  )
}

export default CocktailCard
