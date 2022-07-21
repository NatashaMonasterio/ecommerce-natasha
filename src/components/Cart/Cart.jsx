import { useCartContext } from "../Contexts/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart, vaciarCarrito, precioTotal} = useCartContext()

  return (
        <div>
          <ul>
            {
              cart.map(item => <CartItem key={item.id} item={item}/>)
            }
          </ul>
          <div className="text-center"> 
            <h4>Compra total: ${precioTotal()}</h4>
            <button onClick={vaciarCarrito} className="btn btn-dark mx-3 my-3">Vaciar Carrito</button>
            <Link to="/Form" >
              <button className="btn btn-dark mx-3 my-3">Continuar con la compra</button>
            </Link>
          </div>
        </div>
  )
}

export default Cart;