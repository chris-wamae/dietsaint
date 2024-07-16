"use client";

import styles from "./page.module.css";
import { getEnergyNutrientById } from "./api/route";
import { useEffect, useState } from "react";
import { EnergyNutrient} from "./interfaces/ienergynutrient";
import { Food } from "./interfaces/ifood";
import NutrientTotal from "./components/nutrient_total/nutrientTotal";
import SearchFood from "./components/search_food/searchFood";
import CurrentIngredient from "./components/current_ingredient/currentIngredient";

export default function Home() {

  const [fetchNutrientId, setFetchNutrientId] = useState<number | null>(null)
  const [currentNutrients, setCurrentNutrients] = useState<EnergyNutrient[]>([])
  const [currentFoods, setCurrentFoods] = useState<Food[]>([])
  const [food,setFood] = useState<Food | null>(null)
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
            <NutrientTotal/>
        </div>
        <div className={styles.card}>
            <CurrentIngredient currentNutrients={[]}/>
        </div>
        <div className={styles.card}>
            <SearchFood setFood={setFood}/>
        </div>
      </div>
      <div className={styles.ad_space}></div>
    </main>
  );
}
