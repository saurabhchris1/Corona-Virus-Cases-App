import React from "react";
import CountryTable from "../../Components/Countries/CountryTable";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(6, 1, 6),

    },
}));

const Home = () =>{

    const classes = useStyles();


    return(<React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs>

                    <Container className={classes.heroContent}>
                        <CountryTable/>
                    </Container>
                </Grid>
            </Grid>
        </React.Fragment>


    );
};

export default Home;