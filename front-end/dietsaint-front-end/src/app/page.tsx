"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Nutrient} from "./interfaces/inutrient";
import { Food } from "./interfaces/ifood";
import NutrientTotal from "./components/nutrient_total/nutrientTotal";
import SearchFood from "./components/search_food/searchFood";
import CurrentIngredient from "./components/current_ingredient/currentIngredient";
import { FoodAndNutrient } from "./interfaces/ifoodandnutrient";

export default function Home() {

  const [currentFoods, setCurrentFoods] = useState<Food[]>([])
  const [foodAndNutrients,setFoodAndNutrients] = useState<FoodAndNutrient[]>([])
  const [nutrientType, setNutrientType] = useState<string>("Calories")
  const [currentTotal,setCurrentTotal] = useState<number>(0)
  const [newFoodId, setNewFoodId] = useState<number | null>(null)

  const addFood = (food : Food) => {
   setCurrentFoods([...currentFoods, food])
   setNewFoodId(food.id)
  }


  return (
    <main className={styles.page_container}>
      <div className={styles.ad_space}></div>
      <div className={styles.page_content}>
        <div className={styles.card}>
            <NutrientTotal  foodAndNutrients={foodAndNutrients} setNutrientType={setNutrientType} nutrientType={nutrientType}/>
        </div>
        <div className={styles.card}>
            <CurrentIngredient nutrientType={nutrientType} currentFoods={currentFoods}  newFoodId={newFoodId} setFoodAndNutrients={setFoodAndNutrients} foodAndNutrients={foodAndNutrients}/>
        </div>
        <div className={styles.card}>
            <SearchFood addFood={addFood}/>
        </div>
      </div>
      <div className={styles.ad_space}></div>
    </main>
  );
}
