import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Restaurants from '../Restaurants/Restaurants'

// const RestaurantItem = ({ name, location, image_url, average_score }) => {
//   return (
//     <div className="box">
//       <div className="restaurant-image">
//         <img src={image_url} alt={name} width="250" height="300" />
//       </div>
//       <div className="restaurant-name">{name}</div>
//       <div className="restaurant-location">{location}</div>
//       <div className="average-score">{average_score}</div>
//     </div>
//   )
// }

const Restaurant = (props) => {

  const { name, location, image_url, average_score } = props
  console.log('=====================', props)
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState([])

  useEffect(() => {
    const slug = props.match.params.slug
    // console.log("+++++++++++++++++++", slug);
    const url = `/api/v1/restaurants/${slug}`

    axios.get(url)
      .then(res => {
        console.log("+++++++++++++", res.data);
        setRestaurant(res.data.data)

      })
      .catch(res => console.log(res))

  }, [])

  return (
    <div className="box">
      <div className="restaurant-image">
        {!restaurant.attributes ? null : (
          <img src={restaurant.attributes.image_url} alt={name} width="250" height="300" />
        )}
      </div>
      {!restaurant.attributes ? null : (
        <div>
          <div className="restaurant-name">{restaurant.attributes.name}</div>
          {/* <div className="restaurant-location">{location}</div> */}
      <div className="average-score">{restaurant.attributes.average_score}</div>
        </div>
      )}

    </div>
  )
}

export default Restaurant