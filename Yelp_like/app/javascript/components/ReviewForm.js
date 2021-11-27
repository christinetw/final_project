import React from 'react'
import Rating from './rating/rating'

export default function ReviewForm(props) {
  console.log('============', props);
  const attributes = props.attributes || {}
  return (
    <div className="review-form">
      <form onSubmit={props.handleSubmit}>
        <h3>Write your review here!</h3>
        <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
        <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"/>
        <div className="star-rating">
          <div className="star-rating-title">Rate this restaurant</div>
          <div className="star-rating"> <Rating onChange={props.handleRating} score={props.review.score} /></div>
        </div>
        <button type="submit">Submit your review</button>
      </form>
    </div>
  )
}