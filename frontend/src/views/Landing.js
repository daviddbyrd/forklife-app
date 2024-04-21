import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const Landing = () => {
  const [drinks, setDrinks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new URL(window.location.href)
        const searchTerm = url.searchParams.get('search') || ''
        const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
        setDrinks(response.data.drinks || [])
        setSearchTerm(searchTerm)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    // Cleanup function not necessary in this case
  }, []) // Empty dependency array to execute only once

  return (
    <>
      {/* <SearchForm /> */}
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing;
