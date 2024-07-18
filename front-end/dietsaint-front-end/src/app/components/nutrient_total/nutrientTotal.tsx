import styles from "../../page.module.css"

export default function NutrientTotal({currentTotal,setNutrientType, nutrientType} : {currentTotal : number, setNutrientType : Function, nutrientType : string})
{

return <>
Nutrient Total
<div className={styles.nutrient_total_card}>
            <div className="large_font">Total {nutrientType} Amount</div>
            <div className="medium_font">{currentTotal}</div>
          </div>
          <div className={styles.change_nutrient_dropdown}>
          </div>
</>

}