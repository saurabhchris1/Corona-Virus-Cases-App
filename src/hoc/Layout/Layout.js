import React from "react";
import Header from "../../Components/Header/Header";



const Layout = (props) =>{
    return(
        <React.Fragment>


            {props.children}

        </React.Fragment>
    );
};

export default Layout;