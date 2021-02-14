import { handleActions } from 'redux-actions';
import {getCategoria,ultimaCategoria } from '../actions';

export default handleActions({
    [getCategoria]: (state, action) => {
        //return [state, action.payload];
        return action.payload;
    },

    [ultimaCategoria]: (state, action) => {
       return [action.payload];
    },
}, []);