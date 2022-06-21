import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({titulo, subTitulo})=>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch()
        .then((resp)=>{setProductos(resp)})
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    console.log(productos)

    return(
        <>
            <section className='containerTotal'>
                <h1 className="tituloContainer">{titulo}</h1>
                <p className="subTituloContainer">{subTitulo}</p>
            </section>
            { loading ?
                <h3 className="text-center my-5">Cargando productos... Aguarde</h3>
            :   
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    <ItemList productos={productos}/>
                </div>
            }
        </>
    );
}

export default ItemListContainer;