import { FoodAndNutrient } from "@/app/interfaces/ifoodandnutrient"
import styles from "../../page.module.css"
import { useEffect, useState } from "react"

export default function NutrientTotal({setNutrientType, nutrientType, foodAndNutrients} : {setNutrientType : Function, nutrientType : string, foodAndNutrients : FoodAndNutrient []})
{
const [nutrientTotals,setNutrientTotals] = useState<number>(0)

const calculateNutrientTotals = () => {
let grandTotal = 0
foodAndNutrients.forEach((e) => {
let singleTotal = Number(e.nutrient?.split(" ")[0]) * nutrientUnitsConverter(e.unit) * e.quantity/100
grandTotal += singleTotal
})
setNutrientTotals(grandTotal)
}

console.log(foodAndNutrients)

useEffect(() => {
calculateNutrientTotals()
},[foodAndNutrients])

const nutrientUnitsConverter= (unit : string) : number => {
switch(unit)
{
case "kg" : return 1000
break;
default : return 1
}
}

return <>
Nutrient Total
<div className={styles.nutrient_total_card}>
            <div className="large_font">Total {nutrientType} Amount</div>
            <div className="medium_font">{nutrientTotals}</div>
          </div>
          <div className={styles.change_nutrient_dropdown}>
            <div>Change nutrient type</div>
            <select onChange={e => setNutrientType(e.target.value)}>
              <option value={"Calories"}>Calories</option>
              <option value={"Starch"}>Starch</option>
              <option value={"Lactose"}>Lactose</option>
              <option value={"Sugar"}>Sugar</option>
              <option value={"Carbohydrate"}>Carbohydrate</option>
              <option value={"Magnesium"}>Magnesium</option>
              <option value={"Calcium"}>Calcium</option>
              <option value={"Potassium"}>Potassium</option>
              <option value={"Zinc"}>Zinc</option>
              <option value={"Iron"}>Iron</option>
              <option value={"Protein"}>Protein</option>
              <option value={"Water"}>Water</option>
              <option value={"Fiber"}>Fiber</option>
              <option value={"VitaminB6"}>VitaminB6</option>
              <option value={"VitaminC"}>VitaminC</option>
              <option value={"VitaminA"}>VitaminA</option>
              </select>
          </div>
</>

}