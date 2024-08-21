import React, { useEffect } from 'react'
import '../css/Body.css'
import FirstSuggestion from './FirstSuggestion'
import FoodItems from './FoodItems'
import FilterDiv from './FilterDiv'
import Foods from './Foods'
import '../css/SinglePage.css'




const Body = ({suggestion,setSuggestion,menuItem,setMenuItem,foodItems,setFoodItems}) => {


  const move = (e)=>{
  const suggestions = document.querySelector('.suggestions')
  const left = document.getElementById("left")
  const right = document.getElementById("right")

left.addEventListener("click",()=>{
  suggestions.scrollLeft += -400
}) 
  right.addEventListener("click",()=>{
  suggestions.scrollLeft += 400
  })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return (
    <>
     <div className="bodycontainer">
     

       <FirstSuggestion
        move={move}
        title = "What's on your mind ?"
        suggestion = {suggestion}
        setSuggestion = {setSuggestion}
       />
        <hr />
        <FoodItems
          title = "Top restaurant chains in Coimbatore"
          foodItems= {foodItems}
          setFoodItems = {setFoodItems}
        />
        <hr />
        <FilterDiv
          title= "Restaurants with online food delivery in Coimbatore"
        />

        <Foods 
        menuItem = {menuItem}
        setMenuItem = {setMenuItem}
        />
      </div>
    </>
   
  )
}

export default Body