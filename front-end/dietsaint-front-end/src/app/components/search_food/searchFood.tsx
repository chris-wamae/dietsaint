import { Food } from "@/app/interfaces/ifood"
import styles from "../../page.module.css"

export default function SearchIngredient({setFood} : {setFood : Function})
{

return <>
Search Ingredient
<div className={styles.add_ingredient_card}>
          <div className="large_font">Add Ingredient</div>
          <form className={styles.search_form}>
            <input type="text" placeholder="Enter ingredient name"></input>
            <button onClick={(e) =>{
            e.preventDefault()
            }}>Search</button>
          </form>
          <div className={styles.found_ingredients_cont}>
            
          </div>
          </div>
        
</>

}