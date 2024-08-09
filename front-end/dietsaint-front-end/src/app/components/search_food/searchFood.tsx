'use client'

import { Food } from "@/app/interfaces/ifood"
import styles from "../../page.module.css"
import { useEffect, useState, useRef } from "react"
import { getFoodBySearch } from "@/app/api/route"

export default function SearchIngredient({ addFood }: { addFood: Function }) {

  const [searchQuery, setSearchQuery] = useState<string>("")
  const [foundFoods, setFoundFoods] = useState<Food[]>([])
  const searchRef = useRef<HTMLInputElement>(document.createElement("input"))

  console.log(foundFoods)

  useEffect(() => {

    if (searchQuery !== "") {
      const getFoodByNameSearch = async () => {
        const foodList: Food[] = await getFoodBySearch(searchQuery)
        setFoundFoods(foodList);
      }
      setTimeout(getFoodByNameSearch, 300)
    }

  }, [searchQuery])

  return <>
    Search Ingredient
    <div className={styles.add_ingredient_card}>
      <div className="medium_font">Add Ingredient</div>
      <form className={styles.search_form} onSubmit={(e) => e.preventDefault()

      }>
        <input className={styles.search_input} ref={searchRef} type="text" placeholder="Enter ingredient name" onChange={(e) => {
          setSearchQuery(e.target.value)
        }}></input>
        {/* <button onClick={(e) =>{
            e.preventDefault()
            }}>Search</button> */}
      </form>
      <div className={styles.search_results_cont}>
        {
          foundFoods.map(e => {
            return <div className={styles.search_result}>
              <div className={styles.search_result_name}>{e.name}</div>
              <span className="clickable_element">
              <div 
                 className={styles.add_search_result}
                 onClick={(x) => {
                addFood(e)
                setFoundFoods([])
                if (searchRef !== null) {
                  searchRef.current.value = ""
                }
              }}>+</div>
              </span>
            </div>

          })
        }
      </div>
    </div>

  </>

}