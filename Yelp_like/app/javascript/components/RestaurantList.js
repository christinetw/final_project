import React from 'react'
import Restaurant from './Restaurant'
import Loading from './Loading'
import { useGlobalContext } from './context'

export default function RestaurantList() {
  const { restaurants, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (restaurants.length < 1) {
    return (
      <h2 className='section-title'>
        no restaurant matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>restaurant</h2>
      <div className='restaurants-center'>
        {restaurants.map((item) => {
          return <Restaurant key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}