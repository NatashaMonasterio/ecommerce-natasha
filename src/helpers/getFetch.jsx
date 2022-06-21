import KenLAdulto from '../imagenes/KenLAdulto.PNG' 
import KenLCachorro from '../imagenes/KenLCachorro.PNG' 
import NutriqueAdulto from '../imagenes/NutriqueAdulto.PNG' 
import ProPlanAdulto from '../imagenes/ProPlanAdulto.PNG' 
import RoyalMiniAdulto from '../imagenes/RoyalMiniAdulto.PNG'
import TopNutritionAdulto from '../imagenes/TopNutritionAdulto.PNG'

let productos = [
    {
        id: 1,
        nombre: "Alimento Ken L Adulto",
        descripcion: "22 + 3 kg",
        precio: 6700,
        imagen: KenLAdulto
    },
    {
        id: 2,
        nombre: "Alimento Ken L Cachorro",
        descripcion: "15 + 3 kg",
        precio: 5200,
        imagen: KenLCachorro
      },
    {
        id: 3,
        nombre: "Alimento Nutrique Adulto",
        descripcion: "Raza Mediana",
        precio: 410,
        imagen: NutriqueAdulto
    },
    {
        id: 4,
        nombre: "Alimento Pro Plan Adulto",
        descripcion: "Raza Pequeña",
        precio: 2800,
        imagen: ProPlanAdulto
    },
    {
        id: 5,
        nombre: "Alimento Royal Canin",
        descripcion: "Mini Adulto",
        precio: 1224,
        imagen: RoyalMiniAdulto
    },
    {
        id: 6,
        nombre: "Alimento Top Nutrition Adulto",
        descripcion: "Raza Grande",
        precio: 6520,
        imagen: TopNutritionAdulto
    }
]


export const getFetch = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}