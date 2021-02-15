import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categorias from './reducers/categorias';
import frases from './reducers/frases';
import categoria from './reducers/categoria';
import frase from './reducers/frase';
let initialState = {};

const reducer = combineReducers({
    categorias,
    frases,
    categoria,
    frase
});

function loadFromStorage(){
    if (localStorage.getItem("State") !== null && localStorage.getItem("State") !== undefined){
        return JSON.parse(localStorage.getItem('State'));
    }
}

const store = createStore(reducer,  loadFromStorage(), applyMiddleware(thunk));

export default store;
