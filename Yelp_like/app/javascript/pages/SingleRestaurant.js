import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function SingleRestaurant(props) {
  const { name, location, image_url, average_score } = props
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState([])
  // const { id } = useParams()
  const [loading, setLoading] = useState(false)

  console.log({restaurant});
  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/restaurants/${slug}`
    
    axios.get(url)
      .then(res => {
        console.log("+++++++++++++", res.data.data);
        setRestaurant(res.data.data)
      })
      .catch(res => console.log(res))
      setLoading(true)
    
    // async function getRestaurant() {
    //   try {
    //     const response = await fetch(
    //       `http://localhost:3000/api/v1/reviews`
    //     )
    //     const data = await response.json()
    //     if (data) {
    //       const {
    //         name: name,
    //         image_url: image_url,
    //         location: location,
    //         average_score: average_score,
    //         title: title,
    //         description: description,

    //       } = data.drinks[0]
    //       const ingredients = [
    //         strIngredient1,
    //         strIngredient2,

    //       ]
    //       const newRestaurant = {
    //         name,
    //         image_url,
    //         location,

    //       }
    //       setRestaurant(newRestaurant)
    //     } else {
    //       setRestaurant(null)
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   setLoading(false)
    // }
    // getRestaurant()
  }, [])

  return (
    <div className="box">
      <div className="restaurant-image">
        {!restaurant.attributes ? null : (
        <img src={restaurant.attributes.image_url} alt={restaurant.attributes.name} width={250} height={300} />
        )}
      </div>
      {!restaurant.attributes ? null : (
        <div>
          <div className="restaurant-name">{restaurant.attributes.name}</div>
          <div className="restaurant-location">{restaurant.attributes.location}</div>
      <div className="average-score">{restaurant.attributes.average_score}</div>
        </div>
      )}

    </div>
  )

  // if (loading) {
  //   return <Loading />
  // }
  // if (!restaurant) {
  //   return <h2 className='section-title'>no restaurant to display</h2>
  // } else {
  //   const {
  //     name,
  //     image_url,
  //     //    category,
  //     info,
  //   } = restaurant
  //   return (
  //     <section className='section rest-section'>
  //       <Link to='/' className='btn btn-primary'>
  //         back home
  //       </Link>
  //       <h2 className='section-title'>{name}</h2>
  //       <div className='restaurant'>
  //         <img src={image_url} alt={name}></img>
  //         <div className='restaurant-info'>
  //           <p>
  //             <span className='restaurant-data'>name :</span> {name}
  //           </p>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }
}
