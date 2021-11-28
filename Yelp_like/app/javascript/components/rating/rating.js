import React from 'react'
//import './rating.css'
import ReactStars from "react-rating-stars-component";
const Rating = (props) => {
  // console.log(props.score);
  return (
    <ReactStars
      count={5}
      edit={props.canEdit}
      value={props.score}
      onChange={props.ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  )
}

export default Rating