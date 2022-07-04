import carrito from '../../imagenes/carrito.png';

function CartWidget(){
    return(
        <button className='border-primary'><img src={carrito} alt='CarritoCompra' width={80} /></button>
    )
}

export default CartWidget;