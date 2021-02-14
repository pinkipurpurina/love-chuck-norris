import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categorias from './reducers/categorias';
import frases from './reducers/frases';
import categoria from './reducers/categoria';

const reducer = combineReducers({
    categorias,
    frases,
    categoria
});
const logger= (store:any)=> (next:any)=>(action: any)=>{
    //console.log(action);
    next(action)
}
const store = createStore(reducer, applyMiddleware(logger,thunk));

export default store;
