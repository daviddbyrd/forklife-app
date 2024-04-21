import { Link } from 'react-router-dom'
// import Wrapper from '../Assets/wrappers/CocktailCard.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <div>
      <div class="card" style={{ width: '18rem' }}>
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
