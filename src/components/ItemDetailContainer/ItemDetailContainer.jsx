import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc} from '@firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productos, setProdUnico] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore()
        const queryItem = doc(db, 'productos', id)

        getDoc(queryItem)
        .then((resp)=> setProdUnico({id: resp.id, ...resp.data()}))
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