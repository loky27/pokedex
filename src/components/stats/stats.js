import React from 'react';

function Stats(props){
    return (
            <div className ="col-5 row  m-2 bg-light text-dark">
                <div className= "col">
                <h5>{props.stats.stat.name}</h5> 
                </div>
                <div className="col">
                <h6>{props.stats.base_stat}</h6>
                </div>
            </div>
    )
}

export default Stats;