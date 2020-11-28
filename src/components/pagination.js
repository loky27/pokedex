import Item from"./item/item"
import React from "react";
class pagination extends React.Component {
   
render(){
    /*const pokemonArray = Array.apply(null, Array(10)).map(() => {}); */
    
    return (
        <div className="pagination-row">
            {this.props.urlp
            ?
            <div onClick={() => this.props.pag(this.props.urlp,false)}>pre</div>:
            null
        }
                {this.props.cont.map(ite =>{
                    <Item op={this.props.fetchPageFn} name={ite.o} value={ite.pa} />
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
                /*
                pokemonArray.map( (e, index) => {
                    if ((max > this.props.count.up+index) ) {
                        return (
                            
                        <div className="item" onClick={() => this.props.fetchPageFn(index+this.props.numpag)}>{e}{index +this.props.numpag+1}</div>)
                    }
                 
                })*/