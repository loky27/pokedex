import React from 'react';

function Item(props){
    return (
        <div className="item">
                 
                <div onClick={() => props.op(props.value)}><h4>{props.name}</h4></div>
            
        </div>
        
    )
}

export default Item;