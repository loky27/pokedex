
import React from 'react';
import Stats from "../stats/stats"
import Type from "../type/type"
import Option from "../option/option"
function Opcard(props) {
    const mt6 ={
        margin:"5rem 0rem 0rem 4rem"
    }
    return (
        <div className="row" style={mt6}>
            <div className="col-3">
                <img src={props.pokes.img} alt={props.pokes.name} 
                className="shadow mt-3 bg-white rounded border border-primary"
                 style={{width:"16rem"}}/>
            </div>
            <div className="col">
                <div className="row info basica">
                    <div className=" col-1 number">
                        <p>
                            #{props.pokes.number}
                        </p>
                        {console.log(props.pokes)}
                    </div>
                    <div className="col-3 name">
                        <h2>{props.pokes.name}</h2>
                    </div>
                    <div className=" col especie">
                        <div>
                            <p>componente de especies</p>
                        </div>
                        <div className="row">
                        {props.pokes.type.map(typ=>{
                            return(
                            <Type type={typ}/>
                            )
                        })
                        }
                        </div>
                    </div>
                </div>
                <div className="row info adicional">
                    <div className="col-7 info base stats">
                        <div className="base stats">
                            <p>
                                base stats
                            </p>
                        </div>
                        <div className="row stats">
                        {props.pokes.stats.map(sta=>{
                                return(
                                    <Stats stats={sta}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col opciones">
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