import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {lighten, makeStyles} from "@material-ui/core/styles";

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),

    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhanchedTableToolbar = () =>{
    const classes = useToolbarStyles();
    return(
        <Toolbar>

            <Typography className={classes.title} variant="h6" id="tableTitle" component="div" align="center">
                Latest Covid-19 Updates
            </Typography>



        </Toolbar>
    );

}


export default EnhanchedTableToolbar;