import { useCartContext } from "../Contexts/CartContext";
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from "firebase/firestore"

const Cart = () => {
  const {cart, vaciarCarrito, eliminarItem, precioTotal} = useCartContext()

  async function generarOrden (e) {
    e.preventDefault()
    let orden = {}

    orden.buyer = {name: 'natasha', email: 'monasterio.tashi93@gmail.com', phone: '3513550240'}
    orden.total = precioTotal()
    orden.productos = cart.map (cartItem =>{
      const id = cartItem.id
      const nombre = cartItem.nombre
      const precio = cartItem.precio * cartItem.cantidad
      
      return {id, nombre, precio}
    })

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, orden)
    .then((resp) => console.log(resp))

    //actualizar stock 
    const queryCollectionStock = collection(db, 'productos')
    const queryActualizarStock = await query(
      queryCollectionStock, where ( documentId(), 'in', cart.map(it => it.id) )
    )

    const batch = writeBatch(db)
    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cart.find(item => item.id === res.id).cantidad
    })))
    .finally(()=>vaciarCarrito())

    batch.commit()
  }

  return (
        <div>
          <ul>
            {
              cart.map(item =>
              <li key={item.id} className="m-4">
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
          </ul>
          <div className="text-center"> 
            <h4>Compra total: ${precioTotal()}</h4>
            <button onClick={vaciarCarrito} className="btn btn-dark mx-3 my-3">Vaciar Carrito</button>
            <button onClick={generarOrden} className="btn btn-dark mx-3 my-3">Terminar compra</button>
          </div>
        </div>
   
      
  )
}

export default Cart;