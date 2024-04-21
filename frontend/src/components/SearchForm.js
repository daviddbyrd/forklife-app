import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const submit = useSubmit()

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(`/search?term=${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm;
