import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../components/context'
import Rating from '../components/rating/rating';
import ReviewForm from '../components/ReviewForm';
import Review from '../components/Review';
import Header from '../components/Header';

export default function SingleRestaurant(props) {
  const { name, location, image_url, average_score } = props
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState({ title: '', description: '', score: 0 })
  const [reviews, setReviews] = useState([])
  // const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  let { isLoggedIn, setIsLoggedIn } = useGlobalContext()
  if (!isLoggedIn) {
    return <Redirect to='/login' />
  }

  //console.log({ restaurant });
  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/restaurants/${slug}`

    axios.get(url)
      .then(res => {
        //console.log("", res.data.data);
        setRestaurant(res.data.data)

        axios.get('/api/v1/reviews?id=' + res.data.data.id)
          .then(res => {
            setReviews(res.data)
            console.log("reviews2 = " + JSON.stringify(res.data))
          })
        //console.log("data = " + JSON.stringify(res.data.data));
      })
      .catch(res => console.log(res))
    setLoaded(true)


  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    setReview(Object.assign({}, review, { [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log("handleSubmit");
    const restaurant_id = restaurant.id
    axios.post('/api/v1/reviews', { ...review, restaurant_id })
      .then(res => {
        //console.log("post review = " + JSON.stringify(reviews));
        //const reviews = [...restaurant.reviews, res.data.review]
        //console.log("new review = " + JSON.stringify(res.data));
        setReviews([...reviews, res.data]);
        //setRestaurant({ ...restaurant, reviews })
        //setReview({ title: '', description: '' , score: 0 })
      })
      .catch(res => { })
  }
  // set score
  const setRating = (score) => {
    setReview({ ...review, score })
  }

  let total, average = 0
  let userReviews

  if (reviews) {
    //console.log("reviews here = " + JSON.stringify(reviews));
    //console.log("review count = " + reviews.length);
    total = reviews.reduce((total, review) => total + review.score, 0)
    average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0
    userReviews = reviews.map((review, index) => {
      //console.log("review = " + reviews);
      return (
        <Review
          title={review.title}
          description={review.description}
          score={review.score}
          key={index}
          id={review.id}
        //attributes={review.attributes}
        />
      )
    })
  }
/*
 4+4+4 =  12/3 = 4
 2+2+2 = 6/3 = 3
 18/6 =  3 
 1+1 = 2/2 = 1 
 20/8 = 2.5
*/
  return (
    <>
      <div className="single-restaurant-page">
        <div className="column">
          <div className="restaurant-data">
            <div className="restaurant-image">
              {!restaurant.attributes ? null : (
                <img src={restaurant.attributes.image_url} alt={restaurant.attributes.name} width={250} height={300} />
              )}
            </div>
            {!restaurant.attributes ? null : (
              <div>
                <div className="restaurant-name">{restaurant.attributes.name}</div>
                <div className="restaurant-location">{restaurant.attributes.location}</div>
                <div className="average-score"> <Rating score={restaurant.attributes.average_score} canEdit={false} /></div>
              </div>
            )}
          </div>
          {userReviews}
        </div>
        <div className="column">
          <div className="review-form">
            <ReviewForm
              name={restaurant?.attributes?.name}
              review={review}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}

            />
          </div>


        </div>
      </div>
    </>
  )
}
