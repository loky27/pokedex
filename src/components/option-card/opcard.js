import React from 'react';
import Stats from "../stats/stats"
import Type from "../type/type"
import Option from "../option/option"
function Opcard(props) {
    return (
        <div className="card-container">
            <div>
                <img src={props.pokes.img} alt={props.pokes.name}/>
            </div>
            <div>
                <div className="info basica">
                    <div className="number">
                        <p>
                            #{props.pokes.number}
                        </p>
                        {console.log(props.pokes)}
                    </div>
                    <div className="name">
                        <h2>{props.pokes.name}</h2>
                    </div>
                    <div className="especie">
                    <p>componente de especies</p>
                        {props.pokes.type.map(typ=>{
                            return(
                            <Type type={typ}/>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="info adicional">
                    <div className="info base stats">
                        <div className="base stats">
                            <p>
                                base stats
                            </p>
                        </div>
                        <div className="stats">
                        {props.pokes.stats.map(sta=>{
                                return(
                                    <Stats stats={sta}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="opciones">
                        <div className="opciones">
                            <p>
                                evoluciones..etc
                            </p>
                            <Option op={props.op}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opcard;