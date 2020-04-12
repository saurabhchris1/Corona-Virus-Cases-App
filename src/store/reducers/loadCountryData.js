import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    rows: [],
    loading: false

};


export const loadDataSuccess = (state, action) => {
    return updateObject(state, {
        rows: action.rows,
        loading: false
    });
};

export const loadDataFail = (state, action) => {
    return updateObject(state, {
        loading: false
    });
};


export const loadDataStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};



const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.LOAD_DATA_START: return loadDataStart(state, action);
        case actionTypes.LOAD_DATA_SUCCESS: return loadDataSuccess(state, action);
        case actionTypes.LOAD_DATA_FAIL: return loadDataFail(state, action);

        default:
            return state;

    }

};

export default reducer;