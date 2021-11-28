import React from 'react'
import Rating from './rating/rating'

const Review = (props) => {
  const { title, description, score } = props

  return (
    <div className="card">
      <div className='rating_score'>
        <div className='rating score'> </div>

      </div>
      <div className='Title'>{props.title} </div>
      <div className='description'>{props.description} </div>
    </div>

  )
}

export default Review