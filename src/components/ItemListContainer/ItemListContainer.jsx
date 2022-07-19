import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({titulo, subTitulo})=>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams();

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection (db, 'productos')

        if (categoriaId) {
            const queryCollectionFilter = query (queryCollection, where('categoria','==', categoriaId))
            getDocs(queryCollectionFilter)
            .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
        }
    }, [categoriaId])

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