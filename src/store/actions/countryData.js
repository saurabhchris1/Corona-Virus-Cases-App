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

const createData = (country, total_death, deaths_today, total_confirmed) => {
    return { country, total_death, deaths_today, total_confirmed };
};


export const loadData = () =>{

    return dispatch => {
        dispatch(loadDataStart());

        axios.get('/countries').then(response => {
            const fetchedRows = []
            for (let key in response.data.data){
                fetchedRows.push( createData(response.data.data[key].name, response.data.data[key].latest_data.deaths, response.data.data[key].today.deaths, response.data.data[key].latest_data.confirmed));
            }
            dispatch(loadDataSuccess(fetchedRows));

        }).catch(error => {
            dispatch(loadDataFail(error));
        });
    }

};