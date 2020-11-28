import React from 'react';

function Pagination(props){
    const pokemonArray = Array.apply(null, Array(10)).map(() => {}); 
    const max =props.count.count/props.count.poke
    //Simular arreglo de 10 elementos
    //3. Mostrar las páginas disponibles
    //Si solicitamos la página 10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
    //Si solicitamos la página 14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
    return (
        <div className="pagination-row">
            {props.urlp
            ?
            <div onClick={() => props.pag(props.urlp,false)}>pre</div>:
            null
        }
            {
                pokemonArray.map( (e, index) => {
                    if ( (max+4 > props.count.up+index)&&((props.numpag+1+index)>0) ) {
                        return (
                            <div className="item" onClick={() => props.fetchPageFn(index+props.numpag)}>{index +props.numpag+1}</div>)
                    }
                 
                })
            }
            {props.urln
            ?
            <div onClick={() => props.pag(props.urln,true)}>next</div>
            :null
        }
        </div>
    )
}

export default Pagination;