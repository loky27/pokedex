//import Item from"./item/item"
import React from "react";
class pagination extends React.Component {
render(){
    const pokemonArray = Array.apply(null, Array(10)).map(() => {}); 
    const max =this.props.count.count/this.props.count.poke
    return (
        <div className="pagination-row">
            {this.props.urlp
            ?
            <div onClick={() => this.props.pag(this.props.urlp,false)}>pre</div>:
            null
        }
                {
                pokemonArray.map( (e, index) => {
                    if ( (max+4 > this.props.count.up+index)&&((this.props.numpag+1+index)>0) ) {
                        return (
                            
                        <div className="item" onClick={() => this.props.fetchPageFn(index+this.props.numpag)}>{e}{index +this.props.numpag+1}</div>)
                    }
                 
                })
            }
            {this.props.urln
            ?
            <div onClick={() => this.props.pag(this.props.urln,true)}>next</div>
            :null
        }
        </div>
    )
    }
}
export default pagination;