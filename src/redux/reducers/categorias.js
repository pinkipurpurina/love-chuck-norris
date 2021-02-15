import { handleActions } from 'redux-actions';
import { getCategoriasSuccess } from '../actions';

export default handleActions({
    [getCategoriasSuccess]: (state, action) => {
        return action.payload;
    },
}, []);
