import React from 'react';

function Card(props){
    const image={
        width:"18rem" ,
        height:"18rem"
    }   
    return (
        <div className="row border border-primary m-5 col-5" >
            <img src={props.img} alt={props.name} style={image}
             className="shadow  mt-3 bg-white rounded col"/>
            <div className="col-12 m-2 row">
                <h3 className="col-3">#{props.number}</h3>
                <h2 className="col">{props.name}</h2> 
                <div className="col-2 btn btn-primary" onClick={() => props.info(props.number,false)}>info</div>
                
            </div>
        </div>
        
    )
}

export default Card;