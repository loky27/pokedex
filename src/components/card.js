import React from 'react';

function Card(props){
    return (
        <div className="card-container">
            <img src={props.img} alt={props.name} />
            <div>
                <h3>#{props.number}</h3>
                <h2>{props.name}</h2> 
                <div onClick={() => props.info(props.number,false)}>info</div>
                
            </div>
        </div>
        
    )
}

export default Card;