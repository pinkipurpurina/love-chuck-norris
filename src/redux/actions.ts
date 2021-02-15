import { Action, createAction } from 'redux-actions';
import api from '../services/api';
export const handleApiError = createAction('handleApiError');
export const getCategoriasSuccess = createAction('getCategoriasSuccess');
export const createCategorias = createAction('createCategorias');
export const ultimaCategoria = createAction('ultimaCategoria');
export const setCategoria = createAction('setCategoria');
export const getFrasesSuccess = createAction('getFrasesSuccess');
export const createFraseSuccess = createAction('createFraseSuccess');
export const setFraseSuccess = createAction('setFraseSuccess');
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
export const getFrase = (categoria="") => async (dispatch: any) => {
    try {
        const response = await api.frase.get(categoria);  

        dispatch(getFraseSuccess(response.data.value))
    } catch (e) {
        dispatch(handleApiError(e))
    }
}
//del json
export const getFrases = () => async (dispatch: any) => {
    try {
        const response = await api.frases.get();        
        dispatch(getFrasesSuccess(response.data))
    } catch (e) {
        dispatch(handleApiError(e))
    }
 }
export const setFrases = (data) => async (dispatch: any) => {
    try {
        const response = await api.frases.create(data);        
        dispatch(createFraseSuccess(response.data))
    } catch (e) {
        dispatch(handleApiError(e))
    }
}
