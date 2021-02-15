import { handleActions } from 'redux-actions';
import {setCategoria,ultimaCategoria } from '../actions';

export default handleActions({
    [setCategoria]: (state, action) => {
        //return [state, action.payload];
        return action.payload;
    },

    [ultimaCategoria]: (state, action) => {
       return [action.payload];
    },
}, []);