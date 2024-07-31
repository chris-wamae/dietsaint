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


  console.log(currentNutrients)

  //errors

  //changing the nutrient type only causes data for the last nutrient to be shown in the current ingredients list
  //changing the nutrient causes a food(s?) to be added to the current ingredients list without clicking on it
  
  //these errors are related as instead of an update to the current foods a new one is added with the new nutrient type

  //error is in foodAndNutrients update  and not nutrients update as the nutrient correctly has one item with all the details

  //tracking changes to determine if fetch requests are needed

  //if the nutrient type is changed to a different group, the new group data should be fetched
  //and appended to the existing data of other nutrient groups for that food

  //if the nutrient type is returned to a group that had been already fetched and no new foods have
  //been added, no new fetch requests should occurr

  //if a new foods are added and the nutrient group is then changed back to what it previosly was
  //only the new foods should have their nutrient data fetched for that group since it already exists for 
  //the others  
  const addEnergyNutrientGroup = async (e: Nutrient) => {
    if (e.calories == null) {
      let newNutrient = await getEnergyNutrientByFoodId(e.foodId)
      let oldNutrient = e;
      oldNutrient.calories = newNutrient.calories
      oldNutrient.carbohydrate = newNutrient.carbohydrate
      oldNutrient.lactose = newNutrient.lactose
      oldNutrient.sugars = newNutrient.sugars
      let allNutrients = [...currentNutrients]
      allNutrients.map(e => {
        if (e.foodId == oldNutrient.foodId) {
          e = oldNutrient
        }
        setCurrentNutrients(allNutrients)
      })
    }
  }

  const addVitaminGroup = async (e: Nutrient) => {
    if (e.vitaminC == null) {
      let newNutrient = await getVitaminByFoodId(e.foodId)
      let oldNutrient = e;
      oldNutrient.vitaminA = newNutrient.vitaminA
      oldNutrient.vitaminB6 = newNutrient.vitaminB6
      oldNutrient.vitaminC = newNutrient.vitaminC
      let allNutrients = [...currentNutrients]
      allNutrients.map(e => {
        if (e.foodId == oldNutrient.foodId) {
          e = oldNutrient
        }
        setCurrentNutrients(allNutrients)
      })
    }
  }


  const addMineralGroup = async (e: Nutrient) => {
    if (e.magnesium == null) {
      let newNutrient = await getMineralByFoodId(e.foodId)
      let oldNutrient = e;
      oldNutrient.magnesium = newNutrient.magnesium
      oldNutrient.calcium = newNutrient.calcium
      oldNutrient.potassium = newNutrient.potassium
      oldNutrient.iron = newNutrient.iron
      oldNutrient.zinc = oldNutrient.zinc
      let allNutrients = [...currentNutrients]
      allNutrients.map(e => {
        if (e.foodId == oldNutrient.foodId) {
          e = oldNutrient
        }
        setCurrentNutrients(allNutrients)
      })
    }
  }


  const addUngroupedNutrientGroup = async (e: Nutrient) => {
    if (e.protein == null) {
      let newNutrient = await getUngroupedNutrientByFoodId(e.foodId)
      let oldNutrient = e;
      oldNutrient.protein = newNutrient.protein
      oldNutrient.water = newNutrient.water
      oldNutrient.fiber = newNutrient.fiber
      let allNutrients = [...currentNutrients]
      allNutrients.map(e => {
        if (e.foodId == oldNutrient.foodId) {
          e = oldNutrient
        }
        setCurrentNutrients(allNutrients)
      })
    }
  }

  const updateNutrients = (nutrientType: string) => {

    currentNutrients.forEach(async (e) => {
      switch (nutrientType) {
        case "Starch": addEnergyNutrientGroup(e)
          break;
        case "Lactose": addEnergyNutrientGroup(e)
          break;
        case "Calories": addEnergyNutrientGroup(e)
          break;
        case "Sugars": addEnergyNutrientGroup(e)
          break;
        case "Carbohydrate": addEnergyNutrientGroup(e)
          break;
        case "Protein": addUngroupedNutrientGroup(e)
          break;
        case "Water": addUngroupedNutrientGroup(e)
          break;
        case "Fiber": addUngroupedNutrientGroup(e)
          break;
        case "VitaminC": addVitaminGroup(e)
          break;
        case "VitaminA": addVitaminGroup(e)
          break;
        case "VitaminB6": addVitaminGroup(e)
          break;
        case "Iron": addMineralGroup(e)
          break;
        case "Magnesium": addMineralGroup(e)
          break;
        case "Calcium": addMineralGroup(e)
          break;
        case "Potassium": addMineralGroup(e)
          break;
        case "Zinc": addMineralGroup(e)
          break;

        default: console.log("error");
      }
    })
  }

  //error source
  const updateFoodAndNutrient = (foodAndNutrient: FoodAndNutrient, nutrientType: string) => {

    const nutrient: Nutrient = currentNutrients.filter(x => x.foodId == foodAndNutrient.foodId)[0]
    const localFoodAndNutrient : FoodAndNutrient = foodAndNutrient

    foodAndNutrientSetNutrient(nutrientType, localFoodAndNutrient, nutrient)
    
    const newFoodAndNutrients: FoodAndNutrient[] = foodAndNutrients.map(x => {
      if (x.foodId == localFoodAndNutrient.foodId) {
        return localFoodAndNutrient
      }
      else{
        return x
      }
      
    })

    console.log(newFoodAndNutrients)

    setFoodAndNutrients(newFoodAndNutrients)
  }

  useEffect(() => {
    updateNutrients(nutrientType)
    foodAndNutrients.forEach((faN) => {
      updateFoodAndNutrient(faN, nutrientType)
    })
  }, [nutrientType])

  const typeBasedNutrientFetch = async (nutrientType: string, foodId: number | null) => {
    if (foodId == null) {
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
      const fetchNutrient = async (id: number | null, nutrientType: string) => {

        const foundNutrient: Nutrient | null = await typeBasedNutrientFetch(nutrientType, id)

        if (foundNutrient !== null) {
          setCurrentNutrients([...currentNutrients, foundNutrient])
        }
      }
      fetchNutrient(newFoodId, nutrientType)
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