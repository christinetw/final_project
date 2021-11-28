import React from 'react';
import { Fragment } from 'react';
import Rating from './rating/rating'
  
  const ReviewForm = (props) =>{
//    console.log("properties = " + JSON.stringify(props));
    const ratingOptions = [5,4,3,2,1].map((score, index) => {
      return (
        <Fragment key={index}>
          <input type="radio" value={score} checked={props.review.score == score} onChange={()=>console.log('onChange')} name="rating" id={`rating-${score}`}/>
          <label onClick={props.setRating.bind(this, score)}></label>
        </Fragment>
      )
    })

  return (
    <div className="review-form">
      <form onSubmit={props.handleSubmit}>
        <h3>Have An Experience with {props.name}? Add Your Review!</h3>
        <input onChange={props.handleChange} type="text" name="title" placeholder="Review Title" value={props.review.title}/>
        <input onChange={props.handleChange} type="text" name="description" placeholder="Review Description" value={props.review.description}/>
        <div className="star-rating">
          <div className="star-rating-title">Rate this restaurant</div>
          <Rating ratingChanged={props.setRating}/>
        </div>
        <button type="submit">Submit your review</button>
      </form>
    </div>
  )
}
export default ReviewForm