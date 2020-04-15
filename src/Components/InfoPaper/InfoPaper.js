import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import classes from './Overview.module.css';


const InfoPaper = (props) => {
    return (

        <div className={classes.InfoPaper}>
            <div className={classes.overviewContent}>
                <Typography component="p" variant="h6" className={classes.type}>
                    Overview - {props.data.data.data.name}
                </Typography>
                <Paper elevation={2} >
                    <div className={classes.infoTitle}>
                        <Typography variant="subtitle2" className={classes.Title}>
                            Total Cases
                        </Typography>
                        <Typography variant="h4" style={{color: "rgb(244, 195, 99)"}}>
                            {props.data.data.data.latest_data.confirmed}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.Title}>
                            Total Deaths
                        </Typography>
                        <Typography variant="h4" style={{color: "#DE3700"}}>
                            {props.data.data.data.latest_data.deaths}
                        </Typography>
                      <div>
                          <h2 className={classes.legend}>
                              <div className={classes.color} style={{background: "red"}}></div>
                              <div className={classes.description}>New Cases</div>
                              <div className={classes.total}>{props.data.data.data.today.confirmed}</div>
                          </h2>
                          <h2 className={classes.legend}>
                              <div className={classes.color} style={{background: "green"}}></div>
                              <div className={classes.description}>New Deaths</div>
                              <div className={classes.total}>{props.data.data.data.today.deaths}</div>
                          </h2>
                          <h2 className={classes.legend}>
                              <div className={classes.color} style={{background: "blue"}}></div>
                              <div className={classes.description}>Total Recovered</div>
                              <div className={classes.total}>{props.data.data.data.latest_data.recovered}</div>
                          </h2>
                          <h2 className={classes.legend}>
                              <div className={classes.color} style={{background: "red"}}></div>
                              <div className={classes.description}>Critical</div>
                              <div className={classes.total}>{props.data.data.data.latest_data.critical}</div>
                          </h2>
                          <h2 className={classes.legend}>
                              <div className={classes.color} style={{background: "green"}}></div>
                              <div className={classes.description}>Death Rate</div>
                              <div className={classes.total}>{props.data.data.data.latest_data.calculated.death_rate.toFixed(2)}</div>
                          </h2>
                          <h2 className={classes.legend}>
                              <div className={classes.color} style={{background: "blue"}}></div>
                              <div className={classes.description}>Cases Per Million</div>
                              <div className={classes.total}>{props.data.data.data.latest_data.calculated.cases_per_million_population}</div>
                          </h2>
                      </div>

                    </div>

                </Paper>

            </div>

        </div>


    );
};


export default InfoPaper;