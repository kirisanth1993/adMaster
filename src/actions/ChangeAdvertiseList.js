import { CHANGE_ADVERTISE_LIST } from '../types';

export const ChangeAdvertiseList = advertisementList => (dispatch, getState) => {
    const list= advertisementList
    dispatch({
        type: CHANGE_ADVERTISE_LIST ,
        payload: list
    });
}