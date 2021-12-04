import { CHANGE_SELECTED_CATEGORY } from '../types';

export const ChangeCategory = currentCategory => (dispatch, getState) => {
    dispatch({
        type: CHANGE_SELECTED_CATEGORY ,
        payload: currentCategory
    });
}