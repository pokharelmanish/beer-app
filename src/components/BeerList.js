import React from "react"
import { Link } from "react-router-dom"

const BeerList = ({ beer }) => {
  return (
    <ul>
      <li>
        <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
      </li>
    </ul>
  )
}

export default BeerList
