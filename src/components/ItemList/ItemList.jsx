import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import { Item } from "../Item/Item";

const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch()
        .then((resp)=>{setProductos(resp)})
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    console.log(productos)

    return (
        <div>
            { loading ?
                <h3 className="text-center my-5">Cargando productos... Aguarde</h3>
            :
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    <Item productos={productos}/> 
                </div>
            }
        </div>
    )
}

export default ItemList;