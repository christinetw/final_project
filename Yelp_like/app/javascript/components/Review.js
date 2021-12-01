import React from 'react'
import Rating from './rating/rating';


const Review = (props) => {
  const { title, description, score,handleDestroy } = props

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
     
      <br />
      <button className= 'deletButton' onClick={props.handleDestroy.bind(this, props.id)}>Delete

</button>
    </div>

  )
}

export default Review