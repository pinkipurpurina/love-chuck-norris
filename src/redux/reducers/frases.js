import { handleActions } from 'redux-actions';
import { createFrases, getFrases } from '../actions';
export default handleActions({
    createFrases: (state, action) => {
        return [...state,action.payload];
    },

    getFrases: (state, action) => {
        return [action.payload];
    },
}, []);
