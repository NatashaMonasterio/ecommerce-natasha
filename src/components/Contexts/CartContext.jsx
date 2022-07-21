import {createContext, useState, useContext} from "react";
import swal from "sweetalert";

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
            swal({
                title: '¡Haz agregado un producto a tu carrito',
                icon: 'success',
                width: '300px',
                timer: 3000,
                allowEscapeKey: true
            }) 
        }
    }

    const vaciarCarrito = () => { setCart([]) }

    const eliminarItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }; 

    const precioTotal = () => {
        return cart.reduce((acum, valor) => (acum +(valor.cantidad * valor.precio)), 0)
    }   
 
    const itemCartWidget = () => {
        return cart.reduce((acum, prod) => acum = (acum + prod.cantidad),0)
    }

    return(
        <CartContext.Provider 
            value={{
                cart,
                setCart,
                addToCart,
                vaciarCarrito,
                eliminarItem,
                precioTotal,
                itemCartWidget
            }}
        >
            {children}
        </CartContext.Provider>
    )
}