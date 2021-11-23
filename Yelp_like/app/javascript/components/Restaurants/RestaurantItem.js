import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Restaurants from './Restaurants'

const RestaurantItem = (props) => {
  return (
    <div className="box">
      <div className="restaurant-image">
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className="restaurant-name">{props.attributes.name}</div>
      <div className="restaurant-location">{props.attributes.location}</div>
      <div className="restaurant-score">{props.attributes.average_score}</div>
      <div className="restaurant-link">
        <a href={`/restaurants/${props.attributes.slug}`}>See Restaurant Reviews</a>
      </div>
    </div>
  )
}

export default RestaurantItem