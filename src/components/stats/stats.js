import React from 'react';

function Stats(props){
    return (
            <div>
                <div>
                <h2>{props.stats.stat.name}</h2> 
                </div>
                <div>
                <p>{props.stats.base_stat}</p>
                </div>
            </div>
    )
}

export default Stats;