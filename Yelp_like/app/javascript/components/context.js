import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'


const url = 'http://localhost:3000/api/v1/restaurants'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = useCallback( async () => {
    setLoading(true)
    try {
      //const response = await fetch(`${url}${searchTerm}`)
      const response = await fetch(`${url}`)
      const data = await response.json()
 
      console.log(data);

      const restaurants = data.filter((restaurant) => restaurant.name.includes(searchTerm))
      console.log(restaurants);

      if (restaurants) {
        const newRestaurants = restaurants.map((item) => {
          const {
            name,
            image_url,
            location,
            average_score,
          } = item
          const idRestaurant = new Date().getTime().toString();
          return {
            id: idRestaurant ,
            name: name,
            image_url: image_url,
            location: location,
            average_score: average_score,
      
          }
        })
        setRestaurants(newRestaurants)
      } else {
        setRestaurants([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchRestaurants()
  }, [searchTerm,fetchRestaurants])
  return (
    <AppContext.Provider
      value={{ loading, restaurants, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
