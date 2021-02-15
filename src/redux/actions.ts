import { Action, createAction } from 'redux-actions';
import api from '../services/api';
export const handleApiError = createAction('handleApiError');
export const getCategoriasSuccess = createAction('getCategoriasSuccess');
export const createCategorias = createAction('createCategorias');
export const ultimaCategoria = createAction('ultimaCategoria');
export const setCategoria = createAction('setCategoria');
export const deleteFrase = createAction('deleteFrase');
export const setFrases = createAction('setFrases');
export const getFraseSuccess = createAction('getFraseSuccess');

//de la api las categorías
export const getCategorias = () => async (dispatch: any) => {
    try {
        const response = await api.categorias.get();
        dispatch(getCategoriasSuccess(response.data))
    } catch (e) {
        dispatch(handleApiError(e))
    }
}
//de la api random y con categoría
export const getFrase = (categoria = "") => async (dispatch: any) => {
    try {
        const response = await api.frase.get(categoria);

        dispatch(getFraseSuccess(response.data))
    } catch (e) {
        dispatch(handleApiError(e))
    }
}
