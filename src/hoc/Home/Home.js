import React, {useState, useEffect} from "react";
import EnhancedTable from "../../Components/Countries/CountryTable";
import {Grid} from "@material-ui/core";
import WorldMap from "../../Components/WorldMap/WorldMap";
import InfoPaper from "../../Components/InfoPaper/InfoPaper";
import axios from '../../axios-data';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';



const headCells = [{name: 'name', label: 'Name'}, {name:'totalCases', label: 'Total Cases'}];

const Home = (props) =>{
    useEffect(() => {
        props.onLoadData();
        onRowClickHandler('US');


    }, []);


    const [infoData, setInfoData] = useState({data: {
            "data": {
                "coordinates": {
                    "latitude": 33,
                    "longitude": 65
                },
                "name": "Afghanistan",
                "code": "AF",
                "population": 29121286,
                "updated_at": "2020-04-13T22:53:08.877Z",
                "today": {
                    "deaths": 3,
                    "confirmed": 58
                },
                "latest_data": {
                    "deaths": 21,
                    "confirmed": 665,
                    "recovered": 32,
                    "critical": 0,
                    "calculated": {
                        "death_rate": 3.1578947368421053,
                        "recovery_rate": 4.8120300751879705,
                        "recovered_vs_death_ratio": null,
                        "cases_per_million_population": 17
                    }
                },
                "timeline": []
            },
            "_cacheHit": true
        }});



    const onRowClickHandler = (countryCode) => {

        axios.get('/countries/' + countryCode ).then(response => {

            setInfoData(response);

        }).catch(error => {
            return error;
        });

    }

    let tempData = 0;
    for (let key in props.rows){
        if (props.rows[key].latest_data.confirmed > tempData){
            tempData = props.rows[key].latest_data.confirmed
        }

    }
    return(
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={3}>
                    <EnhancedTable clickHandler={onRowClickHandler} headCells={headCells} rows={props.rows}/>
                </Grid>

                <Grid item xs={12} sm={9}>

                    <InfoPaper data={infoData}/>

                    <WorldMap data={props.rows} totalCasesCalculated ={tempData}/>

                </Grid>

            </Grid>


        </React.Fragment>


    );
};

const mapStateToProps = state => {

    return{
        rows: state.countryData.rows,
        loading: state.countryData.loading,

    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onLoadData: () => dispatch(actions.loadData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);