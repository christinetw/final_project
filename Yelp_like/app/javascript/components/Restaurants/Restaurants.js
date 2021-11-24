import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import RestaurantItem from './RestaurantItem'

const RestaurantItem = ({ name, location, image_url, average_score, slug }) => {
  return (
    <div className="box">
      <div className="restaurant-image">
        <img src={image_url} alt={name} width="250" height="300"/>
      </div>
      <div className="restaurant-name">{name}</div>
      <div className="restaurant-location">{location}</div>
      <div className="restaurant-link">
        <Link to={`/restaurants/${slug}`}>See {name} Reviews</Link>
      </div>
    </div>
  )
}

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {

    axios.get('/api/v1/restaurants')
      .then(res => {
        setRestaurants(res.data)
      })
      .catch(res => console.log(res))
  }, [restaurants.length])

  return (
    <Fragment>
      <div> Restaurant Reviews</div>
      <ul>
        {restaurants.map((item) =>
          <RestaurantItem
            key={item.name}
            name={item.name}
            location={item.location}
            image_url={item.image_url}
            average_score={item.average_score}
            slug={item.slug}
          />)}
      </ul>
    </Fragment>
  )
}

export default Restaurants