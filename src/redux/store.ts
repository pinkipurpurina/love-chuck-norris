import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categorias from './reducers/categorias';
import frases from './reducers/frases';
import categoria from './reducers/categoria';
import frase from './reducers/frase';
import { getFrases} from './actions';
const reducer = combineReducers({
    categorias,
    frases,
    categoria,
    frase
});
 const logger= (store:any)=> (next:any)=>(action: any)=>{
     console.log(action);
     next(action)
 }
const store = createStore(reducer, applyMiddleware(thunk,logger));

export default store;
