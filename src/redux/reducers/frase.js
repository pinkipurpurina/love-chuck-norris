import { handleActions } from 'redux-actions';
import {getFraseSuccess } from '../actions';

export default handleActions({

    [getFraseSuccess]: (state, action) => {
       return action.payload;
    },
}, []);