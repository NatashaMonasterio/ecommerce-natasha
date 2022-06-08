import { useState } from "react";
import KenLAdulto from '../../KenLAdulto.PNG';

function ItemCount ({stock}){
    const [count, setCount] = useState(1)
    
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

    return(
        <section className="card-body">
            <h3>Balanceado</h3>
            <img src={KenLAdulto} alt="KenLAdulto" width={160}/>
            <div className="d-flex mx-3 my-4">
                <button onClick={restar} className="btn-primary">-</button>
                <p className="mx-4">{count}</p>
                <button onClick={agregar} className="btn-primary">+</button>
            </div>
        </section>
    )
}

export default ItemCount;