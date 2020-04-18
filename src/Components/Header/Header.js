import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    appBar : {
        background: '#2E3B55',
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: theme.zIndex.drawer + 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AcUnitIcon/>
                    </IconButton>
                    <Typography variant="h6"  className={classes.title}>
                        Covid-19 World Tracker
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}