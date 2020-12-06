import React from 'react';

function Type(props){
    const name=props.type.type.name;
    return (
        <div className="ml-3 stats">
            <div>
                <h2>{name}</h2> 
                
            </div>
        </div>
        
    )
}

export default Type;