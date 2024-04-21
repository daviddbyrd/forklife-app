import React from 'react'
import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  const error = useRouteError()
  console.log(error)
  return <div>Something went wrong.</div>
}

export default SinglePageError
