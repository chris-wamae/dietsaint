import { EnergyNutrient } from "../interfaces/ienergynutrient"
import { Food } from "../interfaces/ifood"

export async function getEnergyNutrientById(id:number | null) : Promise<EnergyNutrient>
{
const response  = await fetch(`http://192.168.1.186:5174/energy-nutrient/by-food-id?id=${id}`)

const data: EnergyNutrient = await response.json()

return data
}


export async function getFoodBySearch(searchQuery : string) : Promise<Food> {

const response = await fetch(`http://192.168.1.186:5174/food/search-food-by-name?name=${searchQuery}`)

const data: Food = await response.json()

return data

}