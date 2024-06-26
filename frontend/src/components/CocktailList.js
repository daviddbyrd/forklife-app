import CocktailCard from './CocktailCard'
// import Wrapper from '../Assets/wrappers/CocktailList'
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: 'center' }}>No matching cocktail data</h4>
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <div className="cocards">
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </div>
  )
}

export default CocktailList
