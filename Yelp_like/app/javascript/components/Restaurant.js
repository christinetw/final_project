import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating/Rating';



export default function Restaurant({ image_url, name, id, location, average_score }) {

  let imageSrc = "https://maps.googleapis.com/maps/api/staticmap?markers=";
  imageSrc += location.replace(/ /g, "+");
  imageSrc += ",Toronto,Ontario&zoom=13&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&key=AIzaSyC62WGE4DlS6wzMTkLrq3EIszj2qUUpa1o";
  
  return (
    <article className='rest'>
      <div className='img-container'>
        <img src={image_url} alt={name} />
      </div>
      <div className='rest-footer'>
        <h3>{name}</h3>
        <h4> <Rating score={average_score} /></h4>
       
        <p>{location}</p>
        <Link to={`/restaurant/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
      
      <img src={imageSrc}/>

    </article>
  )
  
}
