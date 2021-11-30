import React from 'react'
import Rating from './rating/rating'

const Review = (props) => {
  const { title, description, score,handleDestroy } = props

  return (
    <div className="card">
      <div className='rating_score'>
        <div className='rating score'> 
        <Rating score={props.score}/>
        </div>

      </div>
      <div className='Title'>{props.title} </div>
      <div className='description'>{props.description} </div>
      <button onClick={props.handleDestroy.bind(this, props.id)}>Delete
              
     </button>
    </div>

  )
}

export default Review