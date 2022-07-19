import {createContext, useState, useContext} from "react";
import { Link } from "react-router-dom";

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (item) => {
        return cart.find(producto => producto.id === item.id);
    }

    const addToCart = (item) =>{
        if (isInCart(item)){
            (cart.find(element => element.id === item.id)).cantidad += item.cantidad
        }else{
            setCart([
                ...cart, 
                item
            ])
            alert("Se agrego el producto correctamente")
        }
    }

    const vaciarCarrito = () => { setCart([]) }

    const eliminarItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }; 

    const precioTotal = () => {
        return cart.reduce((acum, valor) => (acum +(valor.cantidad * valor.precio)), 0)
    }   

    /* const carritoVacio = () => {
        return(
            <>
                <h1>No hay productos seleccionados para realizar la compra</h1>
                <Link to="/" >
                    <button>Ver productos para comprar</button>
                </Link>
            </> 
        )
    } */
 
    const itemCartWidget = () => {
        return cart.reduce((acum, prod) => acum = (acum + prod.cantidad),0)
    }

    return(
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                vaciarCarrito,
                eliminarItem,
                precioTotal,
                /* carritoVacio, */
                itemCartWidget
            }}
        >
            {children}
        </CartContext.Provider>
    )
}