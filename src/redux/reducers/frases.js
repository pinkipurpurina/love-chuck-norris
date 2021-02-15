import { handleActions } from 'redux-actions';
import { createFraseSuccess, getFrasesSuccess, } from '../actions';
export default handleActions({
    [createFraseSuccess]: (state, action) => {
        return [...state,action.payload];
    },

    [getFrasesSuccess]: (state, action) => {
        return action.payload;
    },

}, []);
