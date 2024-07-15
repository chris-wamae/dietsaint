"use client";

import styles from "./page.module.css";
import { getEnergyNutrientById } from "./api/route";
import { useEffect, useState } from "react";
import { EnergyNutrient} from "./interfaces/ienergynutrient";
import { Food } from "./interfaces/ifood";

export default function Home() {

  const [fetchNutrientId, setFetchNutrientId] = useState<number | null>(null)
  const [currentNutrients, setCurrentNutrients] = useState<EnergyNutrient[]>([])
  const [currentIngredients, setCurrentIngredients] = useState<Food[]>([])

  const fetchNutrient = async (id: number | null) => {
    const foundNutrient: EnergyNutrient = await getEnergyNutrientById(id)
    setCurrentNutrients([...currentNutrients, foundNutrient])
  }

  useEffect(() => {
    if (fetchNutrientId !== null) {
      fetchNutrient(fetchNutrientId);
    }
  }, [fetchNutrientId])

  return (
    <main className={styles.page_container}>
      <div className={styles.ad_space}></div>
      <div className={styles.page_content}>
        <div className={styles.card}>
          <div className={styles.nutrient_total_card}>
            <div className="large_font">Total Calories Amount</div>
            <div className="medium_font">{"Calories amount"}</div>
          </div>
          <div className={styles.change_nutrient_dropdown}>

          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.current_ingredients_card}>
            <div className="large_font">Current Ingredients</div>
            <div className={styles.current_ingredients_container}>
              {
                currentNutrients.map(e => {
                  return <div className={styles.single_ingredient}>
                    <div className={styles.single_ingredient_name}>{e.calories}</div>
                    <div className={styles.single_ingredient_nutrient}>{e.calories}</div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.add_ingredient_card}>
          <div className="large_font">Add Ingredient</div>
          <form className={styles.search_form}>
            <input type="text" placeholder="Enter ingredient name"></input>
            <button onClick={(e) =>{
            e.preventDefault()
            }}>Search</button>
          </form>
          </div>
        
        </div>
      </div>
      <div className={styles.ad_space}></div>
    </main>
  );
}
