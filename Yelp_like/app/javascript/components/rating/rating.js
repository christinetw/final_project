import React from 'react'
//import './rating.css'
import ReactStars from "react-rating-stars-component";

const Rating = (props) => {
  // console.log(props.score);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    props.onChange && props.onChange(newRating)
  };
  return (
    <ReactStars
      count={5}
      value={props.score}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  )
}

export default Rating