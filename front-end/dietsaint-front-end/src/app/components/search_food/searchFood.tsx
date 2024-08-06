'use client'

import { Food } from "@/app/interfaces/ifood"
import styles from "../../page.module.css"
import { useEffect, useState } from "react"
import { getFoodBySearch } from "@/app/api/route"


export default function SearchIngredient({addFood} : {addFood : Function})
{

const [searchQuery,setSearchQuery] = useState<string>("")
const [foundFoods,setFoundFoods] = useState<Food[]>([])

console.log(foundFoods)

useEffect(() => {

if(searchQuery !== "")
{
 const getFoodByNameSearch = async () => {
  const foodList : Food[]  = await getFoodBySearch(searchQuery)
  setFoundFoods(foodList);
 } 
 setTimeout(getFoodByNameSearch,300)
}

},[searchQuery])

return <>
Search Ingredient
<div className={styles.add_ingredient_card}>
          <div className="large_font">Add Ingredient</div>
          <form className={styles.search_form} onSubmit={(e) => e.preventDefault()
            
          }>
            <input type="text" placeholder="Enter ingredient name" onChange={(e) => {
              setSearchQuery(e.target.value)
            }}></input>
            {/* <button onClick={(e) =>{
            e.preventDefault()
            }}>Search</button> */}
          </form>
          <div className={styles.found_ingredients_cont}>
            {
            foundFoods.map(e => {
             return  <div onClick={(x) => {
              addFood(e)}}>{e.name}</div>
            })
            }
          </div>
          </div>
        
</>

}