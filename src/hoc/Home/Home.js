import React from "react";
import CountryTable from "../../Components/Countries/CountryTable";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import WorldMap from "../../Components/WorldMap/WorldMap";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(6, 1, 6),

    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const Home = () =>{

    const classes = useStyles();


    return(<React.Fragment>
            <Grid container spacing={2} className={classes.heroContent}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <WorldMap/>
                    </Paper>

                </Grid>

                <Grid item xs={12}>

                    <CountryTable/>
                </Grid>
            </Grid>
        </React.Fragment>


    );
};

export default Home;