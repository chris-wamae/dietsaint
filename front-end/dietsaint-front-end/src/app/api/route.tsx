import { EnergyNutrient } from "../interfaces/ienergynutrient"

export async function getEnergyNutrientById(id:number | null) : Promise<EnergyNutrient>
{
const response  = await fetch(`http://192.168.1.186:5174/energy-nutrient/by-food-id?id=${id}`)

const data: EnergyNutrient = await response.json()

return data
}