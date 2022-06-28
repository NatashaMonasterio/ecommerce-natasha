import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch} from "../../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productos, setProdUnico] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams();

    useEffect(()=>{
        getFetch()
        .then((resp)=> setProdUnico(resp.find((prod) => prod.id == (id))))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    }, [id])
  
    return (
        <>
        { loading ?
            <h3 className="text-center"> "Cargando detalle de producto..." </h3>
        :
            <ItemDetail productoUnico={productos}/>
        }
        </>        
    )
}

export default ItemDetailContainer;