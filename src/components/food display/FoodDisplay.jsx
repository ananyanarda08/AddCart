import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = () => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
            return <FoodItem  id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
      </div>
    </div>
  )
}           
export default FoodDisplay                                                                                                                                                                                      