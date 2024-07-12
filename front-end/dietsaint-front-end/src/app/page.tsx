
import Image from "next/image";
import styles from "./page.module.css";
import { getEnergyNutrientById } from "./api/route";

export default async function Home() {
   const food = await getEnergyNutrientById(1)
   console.log(`This is the food.body ${food}`)
  return (
    <main className={styles.page_container}>
      <div className={styles.ad_space}></div>
      <div className={styles.page_content}>
        <div className={styles.card}>
           <div className={styles.nutrient_total_card}>
               <div className="medium_font">{}</div>
               <div className="large_font">Total Calories Amount</div>
           </div>
           <div className={styles.change_nutrient_dropdown}>

           </div>
        </div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <div className={styles.ad_space}></div>
    </main>
  );
}
