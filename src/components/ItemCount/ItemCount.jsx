import { useState } from "react";

function ItemCount ({stock, initial}){
    const [count, setCount] = useState(initial)
    
    function agregar() {
        if (count<stock){
            setCount(count + 1)
        }
    }
    
    function restar() {
        if (count>1){
            setCount(count - 1)
        }
    }

    function comprar(){
        console.log("Haz comprado un total de: ", count, " productos")
    }

    return(
        <section>
            <div className="d-flex justify-content-center">
                <button onClick={restar} className="btn-primary">-</button>
                <p className="mx-4 text-dark">{count}</p>
                <button onClick={agregar} className="btn-primary">+</button>
            </div>
            <button onClick={comprar} className="btn-dark mt-3"> Comprar </button>
        </section>
    )
}

export default ItemCount;