import React from 'react';

import Rating from '../components/rating/rating';



const Header =(props) =>{
  console.log(props)

  const total =reviews.length


  return (
    <div className= 'header'>
      <div><img src={props.image_url} height="50" width="50" alt={props.name} /> {props.name}</div>
      <div>
        <div className = "totalReview">{total}User Review  </div> 
        <div className = "starRating">{total}User Review  </div> 
        <div className = "totalOutOf">{average_score}out of 5 </div> 
    </div> 
    </div>
  )
}
export default Header