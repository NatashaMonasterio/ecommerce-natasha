import carrito from '../../imagenes/carrito.png';

function CartWidget(){
    return(
        <img src={carrito} alt='CarritoCompra' width={80} />
    )
}

export default CartWidget;