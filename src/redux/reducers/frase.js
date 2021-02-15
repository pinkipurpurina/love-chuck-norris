import { handleActions } from 'redux-actions';
import {setFraseSuccess,getFraseSuccess } from '../actions';

export default handleActions({
    [setFraseSuccess]: (state, action) => {
        //return [state, action.payload];
        return action.payload;
    },

    [getFraseSuccess]: (state, action) => {
       return action.payload;
    },
}, []);