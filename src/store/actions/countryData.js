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

const createData = (code, name, totalCases, newCases, totalDeaths,  newDeaths, totalRecovered, critical, deathRate, casesPerMillion, latitude, longitude) => {
    return { code, name, totalCases, newCases, totalDeaths,  newDeaths, totalRecovered, critical, deathRate, casesPerMillion, latitude, longitude};
};



export const loadData = () =>{

    return dispatch => {
        dispatch(loadDataStart());

        axios.get('/countries', ).then(response => {
            const fetchedRows = []
            for (let key in response.data.data){
                fetchedRows.push(createData(response.data.data[key].code, response.data.data[key].name, response.data.data[key].latest_data.confirmed, response.data.data[key].today.confirmed,
                    response.data.data[key].latest_data.deaths,  response.data.data[key].today.deaths, response.data.data[key].latest_data.recovered, response.data.data[key].latest_data.critical,
                    response.data.data[key].latest_data.calculated.death_rate, response.data.data[key].latest_data.calculated.cases_per_million_population, response.data.data[key].coordinates.latitude, response.data.data[key].coordinates.longitude) );
            }
            dispatch(loadDataSuccess(fetchedRows));

        }).catch(error => {
            dispatch(loadDataFail(error));
        });
    }

};