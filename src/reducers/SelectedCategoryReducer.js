import { CHANGE_SELECTED_CATEGORY } from '../types';

const initalState = "all";

export const SelectedCategoryReducer = (state=initalState, action) => {
    switch(action.type){
        case CHANGE_SELECTED_CATEGORY:
            return (action.payload)
        default:
            return state;
    }
};