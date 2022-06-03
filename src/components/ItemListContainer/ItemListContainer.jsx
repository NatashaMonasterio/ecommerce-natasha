import './ItemListContainer.css';

const ItemListContainer = ({titulo, subTitulo})=>{
    return(
        <>
            <section className='containerTotal'>
                <h1 className="tituloContainer">{titulo}</h1>
                <p className="subTituloContainer">{subTitulo}</p>
            </section>
        </>
        
    );
}

export default ItemListContainer;