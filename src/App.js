import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Home from "./hoc/Home/Home";


function App() {


  return (


        <Layout>
            <Switch>
                <Route path='/'exact component={Home}/>
                <Redirect to='/'/>
            </Switch>
        </Layout>

  );
}

export default withRouter(App);
