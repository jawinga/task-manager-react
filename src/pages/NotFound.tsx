import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>404 - Page Not Found
    <Link to="/" style={{ marginRight: "1rem" }}>
      Go to Home
    </Link>
    </div>
  )
}
