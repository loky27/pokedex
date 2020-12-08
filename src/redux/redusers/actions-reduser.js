const  INITIAL_STATE ={
    valor:0
}
const PokemonsReducer =(state=INITIAL_STATE,action)=>{
    //recoive las funciones de  action
    switch(action.type){
        case "INFO":
            break;
        default:
            return state;
    }
}
export default PokemonsReducer;