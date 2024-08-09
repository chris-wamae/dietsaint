import { Nutrient } from "../interfaces/inutrient"
import { Food } from "../interfaces/ifood"

export async function getEnergyNutrientByFoodId(id:number | null) : Promise<Nutrient>
{
const response  = await fetch(`http://192.168.1.186:5174/energy-nutrient/by-food-id?id=${id}`)

const data: Nutrient = await response.json()

return data
}

export async function getVitaminByFoodId(id:number | null) : Promise<Nutrient>
{
const response  = await fetch(`http://192.168.1.186:5174/vitamin/by-food-id?id=${id}`)

const data: Nutrient = await response.json()

return data
}

export async function getUngroupedNutrientByFoodId(id:number | null) : Promise<Nutrient>
{
const response  = await fetch(`http://192.168.1.186:5174/ungrouped-nutrient/by-food-id?id=${id}`)

const data: Nutrient = await response.json()

return data
}


export async function getMineralByFoodId(id:number | null) : Promise<Nutrient>
{
const response  = await fetch(`http://192.168.1.186:5174/mineral/by-food-id?id=${id}`)

const data: Nutrient = await response.json()

return data
}

export async function getFoodBySearch(searchQuery : string) : Promise<Food[]> {

const response = await fetch(`http://192.168.1.186:5174/food/search-food-by-name?name=${searchQuery}`)

const data: Food[] = await response.json()

return data

}