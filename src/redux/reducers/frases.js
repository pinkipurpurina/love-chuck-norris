import { handleActions } from 'redux-actions';
import { setFrases, deleteFrase, } from '../actions';
export default handleActions({
    [setFrases]: (state, action) => {
        return [...state,action.payload];
    },

    [deleteFrase]: (state, action) => {
        console.log(action.payload.id);
        return state.filter((item) => item.id !== action.payload.id);
    },
}, []);
