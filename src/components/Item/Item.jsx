import ItemCount from "../ItemCount/ItemCount"
import KenLAdulto from '../imagenes/KenLAdulto.PNG' 
import KenLCachorro from '../imagenes/KenLCachorro.PNG' 
import NutriqueAdulto from '../imagenes/NutriqueAdulto.PNG' 
import ProPlanAdulto from '../imagenes/ProPlanAdulto.PNG' 
import RoyalMiniAdulto from '../imagenes/RoyalMiniAdulto.PNG'
import TopNutritionAdulto from '../imagenes/TopNutritionAdulto.PNG'

let productos = [
    {
        id: 1,
        nombre: "Alimento Ken L Adulto 22+3kg",
        precio: 6700,
        imagen: KenLAdulto
    },
    {
        id: 2,
        nombre: "Alimento Ken L Cachorro 15+3kg",
        precio: 5200,
        imagen: KenLCachorro
      },
    {
        id: 3,
        nombre: "Alimento Nutrique Adulto Raza Mediana",
        precio: 410,
        imagen: NutriqueAdulto
    },
    {
        id: 4,
        nombre: "Alimento Pro Plan Adulto Raza Pequeña",
        precio: 2800,
        imagen: ProPlanAdulto
    },
    {
        id: 5,
        nombre: "Alimento Royal Canin Mini Adulto",
        precio: 1224,
        imagen: RoyalMiniAdulto
    },
    {
        id: 6,
        nombre: "Alimento Top Nutrition Adulto Raza Grande",
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

export const Item = ()=>{
    return(
        productos.map (prod => <div key={prod.id} className="mb-3 col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        {prod.nombre}
                                    </div>
                                    <div className="card-body">
                                        {<img src={prod.imagen} alt="Alimento balanceado" width={170}/>}
                                    </div>
                                    <div className="card-footer">
                                        {<ItemCount stock={5} initial={1}/>}
                                    </div>
                                </div>        
                            </div>
                ) 
    )
}