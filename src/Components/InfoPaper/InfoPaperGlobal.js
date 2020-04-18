import React from "react";
import Typography from "@material-ui/core/Typography";
import classes from './InfoPaperGlobal.module.css';
import {Grid} from "@material-ui/core";

const InfoPaperGlobal = (props) => {


    return (
<div className={classes.InfoPaper}>
    <Grid container >

        <Grid item xs={12}>
            <Typography variant="h6">
                Global
            </Typography>
        </Grid>
        <Grid item xs={12}>
                 <Typography variant="h4" style={{color: "#DE3700"}}>
                     {props.data.confirmed}
                 </Typography>

        </Grid>
        <Grid item xs={12}>

            <h2 className={classes.legend}>
                <div className={classes.color} style={{background: "red"}}></div>
                <div className={classes.description}>Total Deaths</div>
                <div className={classes.total}>{props.data.deaths}</div>
            </h2>
            <h2 className={classes.legend}>
                <div className={classes.color} style={{background: "green"}}></div>
                <div className={classes.description}>Confirmed Today</div>
                <div className={classes.total}>{props.data.new_confirmed}</div>
            </h2>
            <h2 className={classes.legend}>
                <div className={classes.color} style={{background: "blue"}}></div>
                <div className={classes.description}>Deaths Today</div>
                <div className={classes.total}>{props.data.new_deaths}</div>
            </h2>
        </Grid>

    </Grid>
</div>


    );
};


export default InfoPaperGlobal;