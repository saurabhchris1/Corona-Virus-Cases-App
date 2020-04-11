import React from 'react';
import './App.css';
import NavigationItem from './Components/Header/Header';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import EnhancedTable from './Components/Countries/TestData';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(6, 1, 6),

    },
}));

function App() {
    const classes = useStyles();
  return (
    <div className={classes.heroContent}>
        <NavigationItem/>
        <Grid container spacing={3}>
            <Grid item xs>

                <Container className={classes.heroContent}>
                    <EnhancedTable/>
                </Container>
            </Grid>
        </Grid>



    </div>
  );
}

export default App;
