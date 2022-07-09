import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productoUnico}) => {
  const { addToCart } = useCartContext()
  const [boton, setButton] = useState("button")

  const onAdd = (cant) => {
    console.log("Haz comprado un total de: ", cant, " productos")
    setButton ("botonOpcional")
    addToCart({...productoUnico, cantidad: cant})
  }

  return (
    <>
      <h2 className="text-white bg-dark text-center">DETALLE DE PRODUCTO SELECCIONADO</h2>
      <div className="row my-3 text-center">
              <div className="col-4">
                  {<img src={productoUnico.imagen} alt="Alimento balanceado" width={170}/>}
              </div>
              <div className="col-4">
                  <h3 className="mb-4 border border-dark">{productoUnico.nombre}</h3> 
                  <h4>Para: {productoUnico.categoria}</h4>
                  <h4>Tamaño: {productoUnico.descripcion}</h4>
                  <h5 className="mt-5 border border-dark">Precio: $ {Number(productoUnico.precio)}</h5>
              </div>   
              <div className="col-4 mt-5">
                {
                  boton === "button" ? 
                  <ItemCount stock={5} initial={1} onAdd={onAdd}/>  
                :
                  <div>
                    <div>
                      <Link to="/cart">
                        <button className="btn btn-dark my-3">Finalizar Compra</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/">
                        <button className="btn btn-dark">Seguir comprando</button>
                      </Link>
                    </div>
                  </div>
                }
              </div>       
      </div>
    </>
  )
}

export default ItemDetail;