export async function getEnergyNutrientById(id:number)
{
const response  = await fetch(`http://192.168.1.186:5174/energy-nutrient/by-food-id?id=${id}`, {
    method:'GET',
    headers:
{
'Content-Type':'application/json',
'Access-Control-Allow-Origin':'*'
}
})

const data = await response.json()

return JSON.stringify(data)
}