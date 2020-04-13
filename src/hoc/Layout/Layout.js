import React from "react";
import Header from "../../Components/Header/Header";
import {Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(6, 1, 6),

    },
}));

const Layout = (props) =>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <Header/>

            {props.children}

        </React.Fragment>
    );
};

export default Layout;