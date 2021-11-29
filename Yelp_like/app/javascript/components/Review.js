import React from 'react'
import Rating from './rating/rating'

const Review = (props) => {
  const { title, description, score, created_at} = props

  return (
    <div className="card">
      <br />
      <div className='rating_score'>
        <div className='rating score'> 
        <Rating score={props.score}/>
        </div>

      </div>
      <div className='title'><h4>{props.title} </h4></div>
      <div className='description'><h6>{props.description}</h6> </div>
      <div className='date'>{props.created_at} </div>
      <br />
    </div>

  )
}

export default Review