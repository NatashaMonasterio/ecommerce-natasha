import ItemCount from "../ItemCount/ItemCount"

export const Item = ({productos})=>{
    return(
        productos.map (prod => <div key={prod.id} className="mb-3 col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        {prod.nombre}
                                    </div>
                                    <div className="card-body">
                                        {<img src={prod.imagen} alt="Alimento balanceado" width={170}/>}
                                    </div>
                                    <div className="card-footer">
                                        {<ItemCount stock={5} initial={1}/>}
                                    </div>
                                </div>        
                            </div>
                )
    )
}
