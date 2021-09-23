import React from "react"
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h1>No match</h1>
      <Link to="/"> Home</Link>
    </div>
  )
}

export default NoMatch;