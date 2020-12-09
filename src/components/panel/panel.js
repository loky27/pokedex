import React from "react";
import Pokedex from "../pokedex/pokedex"
export default function Panel(props){
    return (
        <React.Fragment>
            
            <div className="conteiner mt-10 row">
                <div className="col-6 row">
                    <Pokedex/>
                </div>
                <div className="col">
                <h1>{props.user.displayName}</h1>
                <img src={props.user.providerData[0].photoURL}  alt={props.user.providerData[0].photoURL}/>
                </div>
            </div>
        </React.Fragment>
    )
}