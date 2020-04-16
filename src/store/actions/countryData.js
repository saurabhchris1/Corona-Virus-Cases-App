import * as actionTypes from './actionTypes';
import axios from '../../axios-data';

export const loadDataSuccess = (rows) => {
    return {
        type: actionTypes.LOAD_DATA_SUCCESS,
        rows: rows
    }
};

export const loadDataFail = (error) => {
    return {
        type:actionTypes.LOAD_DATA_FAIL,
        error: error
    };
};

export const loadDataStart = (error) => {
    return {
        type:actionTypes.LOAD_DATA_START
    };
};

export const loadData = () =>{

    return dispatch => {
        dispatch(loadDataStart());

        axios.get('/countries', ).then(response => {

            dispatch(loadDataSuccess(response.data.data));

        }).catch(error => {
            dispatch(loadDataFail(error));
        });
    }

};