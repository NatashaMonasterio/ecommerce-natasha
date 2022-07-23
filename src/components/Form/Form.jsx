import { addDoc, collection, getFirestore } from "@firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../Contexts/CartContext"
import swal from "sweetalert"

export const Form = () => {
    const {cart, precioTotal, vaciarCarrito} = useCartContext()

    const [names, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    async function generarOrden(e) {
        e.preventDefault()
        let ordenCompra = {}

        ordenCompra.buyer = {names, email, phone}
        ordenCompra.total = precioTotal()
        ordenCompra.productos = cart.map (cartItem =>{
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad
            
            return {id, nombre, precio}
        })

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, ordenCompra)
        .then(resp => swal("Tu orden de compra es:" + resp.id))
        .catch(err => console.log('ERROR EN ORDEN DE COMPRA: ', err))
        .finally(vaciarCarrito)
    }

    return (
        <>
            <div className="border border-dark mx-5 p-3 text-center">
                <h5>Ingrese sus datos para poder realizar la compra:</h5>
                <form onSubmit={generarOrden} >
                    <div>
                        <div className="pb-3"><input value={names} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Nombre completo"></input></div>
                        <div className="pb-3"><input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="Email"></input></div>
                        <div className="pb-3"><input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" placeholder="Numero de celular"></input></div>
                    </div>
                </form>
            </div>
            <div className="text-center">
                <button onClick={generarOrden} className="btn btn-dark mx-3 my-3">Terminar compra</button>
            </div>
        </>
    )
}

