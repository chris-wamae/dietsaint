import styles from "../../page.module.css"

export default function NutrientTotal()
{

return <>
Nutrient Total
<div className={styles.nutrient_total_card}>
            <div className="large_font">Total Calories Amount</div>
            <div className="medium_font">{"Calories amount"}</div>
          </div>
          <div className={styles.change_nutrient_dropdown}>
          </div>
</>

}