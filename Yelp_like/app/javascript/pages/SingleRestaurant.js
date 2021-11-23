import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleRestaurant() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [restaurant, setRestaurant] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getRestaurant() {
      try {
        const response = await fetch(
     `http://localhost:3000/api/v1/reviews`
        )
        const data = await response.json()
        if (data) {
          const {
            name: name,
            image_url: image_url,
            location: location,
            average_score: average_score,
            title: title,
            description: description,

          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,

          ]
          const newRestaurant = {
            name,
            image_url,
            location,

          }
          setRestaurant(newRestaurant)
        } else {
          setRestaurant(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getRestaurant()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!restaurant) {
    return <h2 className='section-title'>no restaurant to display</h2>
  } else {
    const {
      name,
      image_url,
  //    category,
      info,
    } = restaurant
    return (
      <section className='section rest-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='restaurant'>
          <img src={image_url} alt={name}></img>
          <div className='restaurant-info'>
            <p>
              <span className='restaurant-data'>name :</span> {name}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
