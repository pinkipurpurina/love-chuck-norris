import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categorias from './reducers/categorias';
import frases from './reducers/frases';
import categoria from './reducers/categoria';
import frase from './reducers/frase';
const reducer = combineReducers({
    categorias,
    frases,
    categoria,
    frase
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
