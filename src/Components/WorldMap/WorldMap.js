import React, {useEffect, useState} from "react";
import MapGL,{Marker, Popup} from 'react-map-gl';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2F1cmFiaGNocmlzMSIsImEiOiJjazVuMm5yMzcwOGczM2pxaGI4ZHE0Mjk4In0.-fxmOIhLETOYkYPy_6E1bg';

const useStyles = makeStyles((theme) => ({
    shape: {
        backgroundColor: "rgba(230, 0, 0, 0.54)",
        width: 40,
        height: 40,
    },
    shapeCircle: {
        borderRadius: '50%',
    },
    paper: {
        width: '100%',
        height: '100%',
        marginBottom: theme.spacing(0),
    }
}));

const WorldMap = (props) => {
    // const [toolTip, setToolTip] = useState({showPopup: true});

    const classes = useStyles();
    const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;
    const [viewport, setViewport] = useState({
        latitude: 37.78,
        longitude: -122.41,
        zoom: 1,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100%',
    });

    const [popup, setPopup] = useState({showPopup: true});

    const mapMarker = props.data.filter((country)=> {
        if (country.coordinates.latitude === null || country.coordinates.longitude === null) {
            return false; // skip
        }
        return true;
    }).map((country) => {
        return (

            <Marker latitude={country.coordinates.latitude} longitude={country.coordinates.longitude} offsetLeft={-20}
                    offsetTop={-10} key={country.code}>

                {circle}

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
                latitude={37.78}
                longitude={-122.41}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setPopup({showPopup: false})}
                anchor="top" >
                <div>You are here</div>
            </Popup>}

        </MapGL>
        </Paper>
    );
};


export default WorldMap;