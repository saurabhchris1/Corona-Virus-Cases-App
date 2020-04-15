import React from "react";
import classes from './SideBarButton.module.css';



const SideBarButton = (props) => {

    return(
        <div className={classes.area} tabIndex="0">
            <div className={classes.areaName} >{props.countryName}</div>
            <div className={classes.areaTotal}>
                <div >{props.cases}</div>
            </div>
        </div>
    );
}

export default SideBarButton;