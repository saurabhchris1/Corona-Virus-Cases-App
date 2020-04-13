import React, {useState} from "react";
import MapGL,{Marker} from 'react-map-gl';
import classes from './WorldMap.module.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2F1cmFiaGNocmlzMSIsImEiOiJjazVuMm5yMzcwOGczM2pxaGI4ZHE0Mjk4In0.-fxmOIhLETOYkYPy_6E1bg';

const useStyles = makeStyles((theme) => ({
    shape: {
        backgroundColor: theme.palette.primary.main,
        width: 40,
        height: 40,
    },
    shapeCircle: {
        borderRadius: '50%',
    },
}));

const WorldMap = () => {
    const classes = useStyles();
    const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;
    const [viewport, setViewport] = useState({
        latitude: 37.78,
        longitude: -122.41,
        zoom: 2,
        bearing: 0,
        pitch: 0
    });

    return (

        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        >
            <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>

                {circle}

            </Marker>
        </MapGL>
    );
};


export default WorldMap;