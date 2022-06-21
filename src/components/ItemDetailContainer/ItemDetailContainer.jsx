import { useState } from "react";
import { useEffect } from "react";
import { getFetchOne } from "../../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productoUnico, setProdUnico] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetchOne()
        .then((resp)=> setProdUnico(resp))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    }, [])
  
    return (
        <>
        { loading ?
            <h3 className="text-center"> "Cargando detalle de producto..." </h3>
        :
            <ItemDetail productoUnico={productoUnico}/>
        }
        </>        
    )
}

export default ItemDetailContainer;