import React from 'react';
import { Fragment } from 'react';
import Rating from './rating/rating'
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

const ReviewForm = (props) => {
  //    console.log("properties = " + JSON.stringify(props));
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input type="radio" value={score} checked={props.review.score == score} onChange={() => console.log('onChange')} name="rating" id={`rating-${score}`} />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return (
    <div className="review-form">
      <form onSubmit={props.handleSubmit}>
        <title>Review Form</title>
        <h3>
          Have An Experience with {props.name}?
          <br />
          <small class="text-muted">Add Your Review!</small>
        </h3>
        <br />
        <input onChange={props.handleChange} type="text" name="title" placeholder="Review Title" value={props.review.title} />
        <br />
        <textarea
          className="review-textarea"
          onChange={props.handleChange}
          value={props.review.description}
          name="description"
          // class="form-control z-depth-1"
          rows="3"
          placeholder="Your Review...">
        </textarea>
        <br />
        {/* <input onChange={props.handleChange} type="text" name="description" placeholder="Review Description" value={props.review.description}/> */}
        <div className="star-rating">
          <div className="star-rating-title"><h4>What is your star rating?</h4></div>
          <Rating ratingChanged={props.setRating} />
        </div>
        <br />
        <Button type="submit" class="btn btn-outline-primary">Submit your review</Button>
      </form>
    </div>
  )
}
export default ReviewForm
