import React, {useState, useEffect} from "react";
import EnhancedTable from "../../Components/Countries/CountryTable";
import {Grid, Paper} from "@material-ui/core";
import WorldMap from "../../Components/WorldMap/WorldMap";
import InfoPaper from "../../Components/InfoPaper/InfoPaper";
import axios from '../../axios-data';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import InfoPaperGlobal from "../../Components/InfoPaper/InfoPaperGlobal";
import classes from './Home.module.css';
import Header from "../../Components/Header/Header";
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import MobileMenu from "../../Components/MobileMenu/MobileMenu";


const headCells = [{name: 'name', label: 'Name'}, {name:'totalCases', label: 'Total Cases'}];
const drawerWidth = 320;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1
    },
}));


const Home = (props) =>{

    useEffect(() => {
        props.onLoadData();
        onRowClickHandler('US');
        globalTimeline();

        setWindowSize({ windowWith: window.innerWidth });

    }, []);

    const [globalInfo, setGlobalInfo] = useState({data:{
            "updated_at": "",
            "date": "2020-04-17",
            "deaths": 148814,
            "confirmed": 2206311,
            "recovered": 557656,
            "active": 1499841,
            "new_confirmed": 55293,
            "new_recovered": 16337,
            "new_deaths": 5043,
            "is_in_progress": true
        }});

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

    const [windowSize, setWindowSize] = useState({windowWith: window.innerWidth});

    const onRowClickHandler = (countryCode) => {

        axios.get('/countries/' + countryCode ).then(response => {

            setInfoData(response);

        }).catch(error => {
            return error;
        });

    }

    const globalTimeline = () => {
        axios.get('/timeline' ).then(response => {

            setGlobalInfo({data: response.data.data[0]});

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
    const classStyle = useStyles();
    let outScreen = null;
    if (windowSize.windowWith >= 1024) {
         outScreen =  (<div className={classStyle.root}>
             <CssBaseline />
             <Header/>
             <Drawer
                 className={classStyle.drawer}
                 variant="permanent"
                 classes={{
                     paper: classStyle.drawerPaper,
                 }}
             >
                 <Toolbar />
                 <div className={classStyle.drawerContainer}>

                     <InfoPaperGlobal data={globalInfo.data}/>

                     <EnhancedTable clickHandler={onRowClickHandler} headCells={headCells} rows={props.rows}/>

                 </div>
             </Drawer>
             <main className={classStyle.content}>

                 <Toolbar/>
                 <InfoPaper data={infoData}/>

                 <WorldMap data={props.rows} totalCasesCalculated ={tempData}/>

             </main>


         </div>);

    } else{
         outScreen =   (
             <div className={classes.MobileRoot}>
            <Header/>
            <div className={classes.WorldMap}>
                <WorldMap data={props.rows} totalCasesCalculated ={tempData}/>
            </div>
                <div className={classes.MobileMenu}>
                    <Grid container  >
                        <Grid item xs={12}>

                            <MobileMenu infoPaper={infoData} infoPaperGlobal={globalInfo.data} enhanchedTableHeadCells={headCells} enhanchedTableRows={props.rows} clickHandler={onRowClickHandler} />
                        </Grid>
                    </Grid>
                </div>


        </div>);
    }



    return(
        <React.Fragment>
            {outScreen}


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