import React from 'react'
import { Link } from 'react-router-dom'
export default function Restaurant({ image_url, name, id, location, average_score }) {
  return (
    <article className='rest'>
      <div className='img-container'>
        <img src={image_url} alt={name} />
      </div>
      <div className='rest-footer'>
        <h3>{name}</h3>
        <h4>{average_score}</h4>
        <p>{location}</p>
        <Link to={`/restaurant/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}
