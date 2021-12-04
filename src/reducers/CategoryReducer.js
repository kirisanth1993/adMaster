import { CHANGE_CATEGORY_OPTIONS } from '../types';

const initalState = [
    {
        id: "all",
        name: "All"
    },
    {
        id: "community",
        name: "Community"
    },
    {
        id: "professional",
        name: "Professional"
    },
    {
        id: "housing",
        name: "Housing"
    },
    {
        id: "buying",
        name: "Buying"
    },
    {
        id: "selling",
        name: "Selling"
    },
    {
        id: "jobs",
        name: "Jobs"
    },
    {
        id: "education",
        name: "Education"
    },
    {
        id: "commercial",
        name: "Commercial"
    }
];

export const CategoryReducer = (state=initalState, action) => {
    switch(action.type){
        case CHANGE_CATEGORY_OPTIONS:
            return {
                categoryList: action.payload
            }
        default:
            return state;
    }
};