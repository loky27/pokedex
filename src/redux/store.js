import {createStore,combineReducers} from "redux";
import PokemonsReducer from "./redusers/actions-reduser"
const rootReducer = combineReducers({PokemonsReducer})
const store = createStore(rootReducer,{});
export default store;
//combinar todos los reducers 
//es como si estuvieramos combunando los estados de nuestra app en uno solo
/* const [pokemones, setpokemones] = useState([])
    const [user , setuser] = useState ({})
    al combinarlos 
    store : {
        pokemones: [],
        user: {}
    }
*/