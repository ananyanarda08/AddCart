import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../food display/FoodDisplay'
import AppDownload from '../Appdownload/AppDownload'
const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category}  setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
