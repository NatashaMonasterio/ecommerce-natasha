import { useCartContext } from "../Contexts/CartContext";

const Cart = () => {
  const {cart, vaciarCarrito} = useCartContext()
  return (
    <div>
      <ul>
        {
          cart.map(item =>  
            <li key={item.id} className="mb-4">
              <div className="d-flex">
                <div className="border">
                  <img src={item.imagen} alt="Producto a la venta" width={110}/>
                </div>  
                <div>
                  <p className="">{item.nombre}</p>
                  <p>$ {item.precio}</p> 
                  <p>Cantidad: {item.cantidad}</p>
                </div> 
              </div>       
            </li>
          )
        }
      </ul>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart;