import { Link } from "react-router-dom"

export const Item = ({prod})=>{
    return(
        <div className="mb-3 col-3">
            <div className="card text-center">
                <div className="card-header">
                    {prod.nombre}
                </div>
                <div className="card-body">
                    {<img src={prod.imagen} alt="Alimento balanceado" width={170}/>}
                </div>
                <div className="card-footer">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-outline-primary mb-3">Detalle de producto</button>
                    </Link>
                </div>
            </div>        
        </div>
    ) 
}
