import { combineReducers } from "redux";

import { CategoryReducer } from "./CategoryReducer";
import { AdvertiseReducer } from './AdvertiseReducer';
import { SelectedCategoryReducer } from "./SelectedCategoryReducer";

const rootReducer = combineReducers({
    categoryList: CategoryReducer,
    advertisementList: AdvertiseReducer,
    category: SelectedCategoryReducer
});

export default rootReducer;
