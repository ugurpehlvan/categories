import { FETCH_CATEGORIES, SELECT_CATEGORIES, FETCH_CATEGORY_FAILURE } from './actionTypes';
import { Dispatch } from 'redux';

export const selectCategories = (payload: string[]) => ({
  type: SELECT_CATEGORIES,
  payload: payload,
});

export const fetchCategories = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch('/assets/items.json')
            const { data } = await response.json();
            dispatch({ type: FETCH_CATEGORIES, payload: data });
        } catch (error:any) {
            dispatch({ type: FETCH_CATEGORY_FAILURE, payload: error.message });
        }
    };
};