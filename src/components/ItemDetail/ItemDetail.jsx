const ItemDetail = ({productoUnico}) => {
  return (
    <div className="row text-center bg-dark my-3">
            <h2 className="text-white bg-secondary">DETALLE DE PRODUCTOS</h2>
            <div className="col-6">
                {<img src={productoUnico.imagen} alt="Alimento balanceado" width={170}/>}
            </div>
            <div className="col-2 my-5 text-white">
                <h3>{productoUnico.nombre}</h3> 
                <h4>Para: {productoUnico.descripcion}</h4>
                <h5>Precio: $ {Number(productoUnico.precio)}</h5>
            </div>            
    </div>
  )
}

export default ItemDetail;