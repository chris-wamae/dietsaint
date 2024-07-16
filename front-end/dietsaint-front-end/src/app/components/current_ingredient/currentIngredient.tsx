import styles from "../../page.module.css"

export default function CurrentIngredient({currentNutrients} : {currentNutrients : string []})
{
 return <>
 Current Ingredient
 <div className={styles.current_ingredients_card}>
            <div className="large_font">Current Ingredients</div>
            <div className={styles.current_ingredients_container}>
              {
                currentNutrients.map(e => {
                  return <div className={styles.single_ingredient}>
                    <div className={styles.single_ingredient_name}>{e}</div>
                    <div className={styles.single_ingredient_nutrient}>{e}</div>
                  </div>
                })
              }
            </div>
          </div>
 </>   
}