import { useCartContext } from "../Contexts/CartContext"

export const CartItem = ({item}) => {
    const {eliminarItem} = useCartContext()

    return(
        <li className="m-4" style={{listStyleType: 'none'}}>
            <div className="d-flex border border-secondary p-3">
                <div>
                   <img src={item.imagen} alt={item.nombre} height={160}/>
                </div>
                <div className="mx-3">
                    <h5 className="mb-4">{item.nombre}</h5>
                    <p className="mb-1">Unidad: $ {item.precio}</p>
                    <p className="mb-1">Cantidad: {item.cantidad}</p>
                    <p className="mb-1">Total de este producto: ${item.precio * item.cantidad}</p>
                </div>
                <button key={item.id} onClick={()=>eliminarItem(item.id)} className="btn-danger h-25 mx-3">X</button>
            </div>                
        </li>
    )
}