import styles from "../../page.module.css"
import { Food } from "@/app/interfaces/ifood"
import { Nutrient } from "@/app/interfaces/inutrient"
import { FoodAndNutrient } from "@/app/interfaces/ifoodandnutrient"
import { getEnergyNutrientByFoodId, getMineralByFoodId, getUngroupedNutrientByFoodId, getVitaminByFoodId } from "@/app/api/route"
import { useState } from "react"
import { useEffect } from "react"


//cases
//a user can add a new food
//requires only a fetch of 1 nutrient for the new food

//a user can change nutrient type to one in the existing group
//requires not fetch but access to current nutrient object to change type

//a user can change nutrient type to one in a new group
//requires all the nutrients to be fetched again for the new type

export default function CurrentIngredient({ currentFoods, nutrientType, newFoodId }: { currentFoods: Food[], nutrientType: string, newFoodId: number | null }) {

  const [currentNutrients, setCurrentNutrients] = useState<Nutrient[]>([])
  const [foodAndNutrients, setFoodAndNutrients] = useState<FoodAndNutrient[]>([])

  const updateFoodAndNutrient = (foodAndNutrient: FoodAndNutrient, nutrientType: string) => {

    const nutrient: Nutrient = currentNutrients.filter(x => x.foodId == foodAndNutrient.foodId)[0]

    foodAndNutrientSetNutrient(nutrientType, foodAndNutrient, nutrient)

    if (foodAndNutrient.nutrient == null) {

    }

  }

  const typeBasedNutrientFetch = async (nutrientType: string, foodId: number | null) => {
    if(foodId == null)
    {
     return null
    }
    else if (nutrientType == "Calories" || nutrientType == "Starch" || nutrientType == "Lactose" || nutrientType == "Sugars" || nutrientType == "Carbohydrate") {
      return await getEnergyNutrientByFoodId(foodId)
    }
    else if (nutrientType == "Magnesium" || nutrientType == "Calcium" || nutrientType == "Potassium" || nutrientType == "Zinc" || nutrientType == "Iron") {
      return await getMineralByFoodId(foodId)
    }
    else if (nutrientType == "Protein" || nutrientType == "Water" || nutrientType == "Fiber") {
      return await getUngroupedNutrientByFoodId(foodId)
    }
    else if (nutrientType == "VitaminB6" || nutrientType == "VitaminC" || nutrientType == "VitaminA") {
      return await getVitaminByFoodId(foodId)
    }
    else {
      return null;
    }

  }

  const foodAndNutrientSetNutrient = (nutrientType: string, foodAndNutrient: FoodAndNutrient, nutrient: Nutrient) => {
    switch (nutrientType) {
      case "Calories": foodAndNutrient.nutrient = nutrient.calories
        break;
      case "Starch": foodAndNutrient.nutrient = nutrient.starch
        break;
      case "Lactose": foodAndNutrient.nutrient = nutrient.lactose
        break;
      case "Sugars": foodAndNutrient.nutrient = nutrient.sugars
        break;
      case "Carbohydrate": foodAndNutrient.nutrient = nutrient.carbohydrate
        break;
      case "Magnesium": foodAndNutrient.nutrient = nutrient.magnesium
        break;
      case "Calcium": foodAndNutrient.nutrient = nutrient.calcium
        break;
      case "Potassium": foodAndNutrient.nutrient = nutrient.potassium
        break;
      case "Zinc": foodAndNutrient.nutrient = nutrient.zinc
        break;
      case "Iron": foodAndNutrient.nutrient = nutrient.iron
        break;
      case "Protein": foodAndNutrient.nutrient = nutrient.protein
        break;
      case "Water": foodAndNutrient.nutrient = nutrient.water
        break;
      case "Fiber": foodAndNutrient.nutrient = nutrient.fiber
        break;
      case "VitaminB6": foodAndNutrient.nutrient = nutrient.vitaminB6
        break;
      case "VitaminC": foodAndNutrient.nutrient = nutrient.vitaminC
        break;
      case "VitaminA": foodAndNutrient.nutrient = nutrient.vitaminA
        break;
      default: foodAndNutrient.nutrient = null
        break;
    }
  }

  const createFoodAndNutrient = (food: Food, nutrient: Nutrient, nutrientType: string) => {

    let foodAndNutrient: FoodAndNutrient = {
      foodId: food.id,
      name: food.name,
      nutrient: ""
    }

    foodAndNutrientSetNutrient(nutrientType, foodAndNutrient, nutrient)

    setFoodAndNutrients([...foodAndNutrients, foodAndNutrient])

  }


  useEffect(() => {
    if (currentFoods.length > 0) {
      const fetchNutrient = async (id: number | null, nutrientType : string) => {

        const foundNutrient: Nutrient | null = await typeBasedNutrientFetch(nutrientType,id)

        if(foundNutrient !== null)
        {
          setCurrentNutrients([...currentNutrients, foundNutrient])
        }
      }
      fetchNutrient(newFoodId,nutrientType)
    }

  }, [currentFoods])

  useEffect(() => {
    if (currentNutrients.length > 0) {
      createFoodAndNutrient(currentFoods[currentFoods.length - 1], currentNutrients[currentNutrients.length - 1], nutrientType)
    }
  }, [currentNutrients])

  return <>
    Current Ingredient
    <div className={styles.current_ingredients_card}>
      <div className="large_font">Current Ingredients</div>
      <div className={styles.current_ingredients_container}>
        {
          foodAndNutrients.map(e => {
            return <div className={styles.single_ingredient}>
              <div className={styles.single_ingredient_name}>{e.name}</div>
              <div className={styles.single_ingredient_nutrient}>{e.nutrient}</div>
            </div>
          })
        }
      </div>
    </div>
  </>
}