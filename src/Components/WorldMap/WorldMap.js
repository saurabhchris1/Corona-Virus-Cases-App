import React, { useState} from "react";
import MapGL,{Marker, Popup} from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import classesWp from './WorldMap.module.css';
import * as mapboxToken from '../../MapboxID';

const MAPBOX_TOKEN = mapboxToken.mapBoxID;

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '100%',
        height: '100%',
        marginBottom: theme.spacing(0),
    }
}));



const WorldMap = (props) => {
    // const [toolTip, setToolTip] = useState({showPopup: true});

    const classes = useStyles();
    const [viewport, setViewport] = useState({
        latitude: 28,
        longitude: 3,
        zoom: 0,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100vh',
    });




    const [popup, setPopup] = useState({showPopup: false, latitude: 0, longitude:0, country: 'USA', totalCases: 100, totalDeaths: 100, newCases: 100, newDeaths: 100});

    const onMarkerClickHandler = (latitude, longitude,  name, totalCases, totalDeaths, newCases, newDeaths) => {
        setPopup({showPopup: true, latitude: latitude, longitude:longitude, country: name, totalCases: totalCases, totalDeaths: totalDeaths, newCases: newCases, newDeaths: newDeaths});

        setTimeout(() =>(
            setPopup({showPopup: false})
        ), 3000);

    }

    const mapMarker = props.data.filter((country)=> {
        if ((country.coordinates.latitude === null || country.coordinates.longitude === null) || (country.coordinates.latitude === 0 || country.coordinates.longitude === 0)) {
            return false; // skip
        }
        return true;
    }).map((country) => {
        // const finalValue =  country.latest_data.confirmed === 0 ? 0 : (( Math.log(country.latest_data.confirmed) / Math.log(props.totalCasesCalculated)) * 55) + 5
        // const finalValue =  ( Math.pow(country.latest_data.confirmed, 1.001) / Math.pow(props.totalCasesCalculated, 1.001) ) * 45+5;
        const finalValue =  country.latest_data.confirmed === 0 ? 0 : 60-50 * ( Math.exp(-5*(country.latest_data.confirmed) / (props.totalCasesCalculated) ) )

        const pWidth = finalValue.toString() + 'px';
        const pHeight = finalValue.toString() + 'px';

        return (

            <Marker latitude={country.coordinates.latitude} longitude={country.coordinates.longitude} offsetLeft={-20}
                    offsetTop={-10} key={country.code}  anchor="bottom">

                <div className={classesWp.marker} style={{backgroundColor: "rgba(230,0,0,0.54)", width: pWidth, height: pHeight, borderRadius: '50%'}}
                     onClick={() => onMarkerClickHandler(country.coordinates.latitude, country.coordinates.longitude, country.name,
                          country.latest_data.confirmed, country.latest_data.deaths, country.today.confirmed, country.today.deaths)}></div>
            </Marker>

        );
    })

    return (
        <Paper className={classes.paper} elevation={0}>
        <MapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/light-v10"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        >

        {mapMarker}
            {popup.showPopup && <Popup
                latitude={popup.latitude}
                longitude={popup.longitude}
                closeButton={true}
                closeOnClick={true}
                onClose={() => setPopup({showPopup: false})}
                anchor="bottom"
                dynamicPosition={false}
            >
                <div>
                    <div className={classesWp.topToolTip} >
                        <div className={classesWp.titleInfoBox}>{popup.country}</div>
                        <div className={classesWp.statLine}>
                            <div className={classesWp.stat} style={{color: '#DE3700'}}>Total cases</div>
                            <div className={classesWp.statCount}>{popup.totalCases}</div>
                        </div>
                        <div className={classesWp.divider}></div>
                        <div className={classesWp.statLine}>
                            <div className={classesWp.legendColor} style={{backgroundColor: '#F4C363'}}></div>
                            <div className={classesWp.stat}>Total Deaths</div>
                            <div className={classesWp.statCount}>{popup.totalDeaths}</div>
                        </div>
                        <div className={classesWp.statLine}>
                            <div className={classesWp.legendColor} style={{backgroundColor: '#60BB69'}}></div>
                            <div className={classesWp.stat}>Cases Today</div>
                            <div className={classesWp.statCount}>{popup.newCases}</div>
                        </div>
                        <div className={classesWp.statLine}>
                            <div className={classesWp.legendColor} style={{backgroundColor: '#767676'}}></div>
                            <div className={classesWp.stat}>Deaths Today</div>
                            <div className={classesWp.statCount}>{popup.newDeaths}</div>
                        </div>
                        <i></i>
                    </div>

                </div>

            </Popup>}

        </MapGL>
        </Paper>
    );
};


export default WorldMap;