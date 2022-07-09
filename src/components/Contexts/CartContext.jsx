import {createContext, useState, useContext} from "react";

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

    const vaciarCarrito = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    )
}