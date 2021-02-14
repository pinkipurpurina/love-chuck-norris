import { Action, createAction } from 'redux-actions';
import api from '../services/api';
export const handleApiError = createAction('handleApiError');
export const getCategoriasSuccess = createAction('getCategoriasSuccess');
export const createCategorias = createAction('createCategorias');//ultimaCategoria
export const ultimaCategoria = createAction('ultimaCategoria');//ultimaCategoria
export const getCategoria = createAction('getCategoria');
export const getFrases = createAction('getFrases');
export const createFrases = createAction('createFrases');

export const getCategorias = () => async (dispatch: any) => {
    try {
        const response = await api.categorias.get();
        dispatch(getCategoriasSuccess(response.data))

    } catch (e) {
        dispatch(handleApiError(e))
    }

}

// export const createCategoria = () => async (dispatch: any) => {
//     try {
//         const response = await api.categorias.get();
//         dispatch(getCategoriasSuccess(response.data))

//     } catch (e) {
//         dispatch(handleApiError(e))
//     }

// }

