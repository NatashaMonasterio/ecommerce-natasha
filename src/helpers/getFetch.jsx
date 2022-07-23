import KenLAdulto from '/imagenes/KenLAdulto.PNG' 
import KenLCachorro from '/imagenes/KenLCachorro.PNG' 
import NutriqueAdulto from '/imagenes/NutriqueAdulto.PNG' 
import ProPlanAdulto from '/imagenes/ProPlanAdulto.PNG' 
import RoyalMiniAdulto from '/imagenes/RoyalMiniAdulto.PNG'
import TopNutritionAdulto from '/imagenes/TopNutritionAdulto.PNG'
import ExcellentAdult from '/imagenes/ExcellentAdult.PNG'
import PurinaCatChow from '/imagenes/PurinaCatChow.PNG'
import PurinaGati from '/imagenes/PurinaGati.PNG'
import KongoGatos from '/imagenes/KongoGatos.PNG'
import RoyalInstinctive from '/imagenes/RoyalInstinctive.PNG'

let productos = [
    {
        id: 1,
        nombre: "Alimento Ken L Adulto",
        descripcion: "22 + 3 kg",
        precio: 6700,
        categoria: "perro",
        imagen: KenLAdulto
    },
    {
        id: 2,
        nombre: "Alimento Ken L Cachorro",
        descripcion: "15 + 3 kg",
        precio: 5200,
        categoria: "perro",
        imagen: KenLCachorro
      },
    {
        id: 3,
        nombre: "Alimento Nutrique Adulto",
        descripcion: "Raza Mediana",
        precio: 410,
        categoria: "perro",
        imagen: NutriqueAdulto
    },
    {
        id: 4,
        nombre: "Alimento Pro Plan Adulto",
        descripcion: "Raza Pequeña",
        precio: 2800,
        categoria: "perro",
        imagen: ProPlanAdulto
    },
    {
        id: 5,
        nombre: "Alimento Royal Canin",
        descripcion: "Mini Adulto",
        precio: 1224,
        categoria: "perro",
        imagen: RoyalMiniAdulto
    },
    {
        id: 6,
        nombre: "Alimento Top Nutrition Adulto",
        descripcion: "Raza Grande",
        precio: 6520,
        categoria: "perro",
        imagen: TopNutritionAdulto
    },
    {
        id: 7,
        nombre: "Excellent Adult",
        descripcion: "Adulto - 3kg",
        precio: 2840,
        categoria: "gato",
        imagen: ExcellentAdult
    },
    {
        id: 8,
        nombre: "Purina Cat Chow",
        descripcion: "Multiproteina - Adulto - 8kg",
        precio: 4269,
        categoria: "gato",
        imagen: PurinaCatChow
    },
    {
        id: 9,
        nombre: "Purina Gati",
        descripcion: "Pescado con vegetales - Adulto - 15kg",
        precio: 4443,
        categoria: "gato",
        imagen: PurinaGati
    },
    {
        id: 10,
        nombre: "Kongo Gatos",
        descripcion: "Salmon y atún - Adulto - 8kg",
        precio: 2678,
        categoria: "gato",
        imagen: KongoGatos
    },
    {
        id: 11,
        nombre: "Royal Canin Gato Instinctive",
        descripcion: "85gr",
        precio: 303,
        categoria: "gato",
        imagen: RoyalInstinctive
    }
]


export const getFetch = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}