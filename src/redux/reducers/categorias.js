import { handleActions } from 'redux-actions';
import { getCategoriasSuccess, createCategoriasSuccess } from '../actions';

export default handleActions({
    [getCategoriasSuccess]: (state, action) => {
        return action.payload;
    },

}, []);
