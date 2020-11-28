import React from 'react';

function Option(props){
    return (
        <div className="stats">
            <div>
                 
                <div onClick={() => props.op(true)}><h4>{"regresar"}</h4></div>
            </div>
        </div>
        
    )
}

export default Option;