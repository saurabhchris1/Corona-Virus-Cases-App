import React from "react";
import Typography from "@material-ui/core/Typography";
import classes from './InfoPaperMobile.module.css';
import InfoPaperChart from "../Charts/InfoPaperChart";

const InfoPaperMobile = (props) => {
    const createDataDaily = (date, deaths, confirmed) => {
        return { date, deaths, confirmed};
    };
    const createDataToday = (date, new_deaths, new_confirmed) => {
        return { date, new_deaths, new_confirmed};
    };
    const chartDataDaily = [];

    for (let key in props.data.data.data.timeline){
        chartDataDaily.push(createDataDaily(props.data.data.data.timeline[key].date, props.data.data.data.timeline[key].deaths, props.data.data.data.timeline[key].confirmed));
    }

    const chartDataToday = [];

    for (let key in props.data.data.data.timeline){
        chartDataToday.push(createDataToday(props.data.data.data.timeline[key].date, props.data.data.data.timeline[key].new_deaths, props.data.data.data.timeline[key].new_confirmed));
    }


    return (

        <div className={classes.InfoPaper}>
            <div className={classes.overviewContent}>
                <Typography  variant="subtitle1" className={classes.type}>
                    Overview - {props.data.data.data.name}
                </Typography>
                <div className={classes.overview}>
                    <div className={classes.infoTitle}>
                        <Typography variant="subtitle2" className={classes.Title}>
                            Total Cases
                        </Typography>
                        <Typography variant="h4" style={{color: "rgb(244, 195, 99)"}}>
                            {props.data.data.data.latest_data.confirmed}
                        </Typography>

                        <div>
                            <h2 className={classes.legend}>
                                <div className={classes.color} style={{background: "red"}}></div>
                                <div className={classes.description}>New Cases</div>
                                <div className={classes.total}>{props.data.data.data.today.confirmed}
                                    <div className={classes.delta}>+28,339</div></div>
                            </h2>
                            <h2 className={classes.legend}>
                                <div className={classes.color} style={{background: "green"}}></div>
                                <div className={classes.description}>Deaths</div>
                                <div className={classes.total}>{props.data.data.data.latest_data.deaths}
                                    <div className={classes.delta}>{props.data.data.data.today.deaths}</div></div>
                            </h2>
                            <h2 className={classes.legend}>
                                <div className={classes.color} style={{background: "blue"}}></div>
                                <div className={classes.description}>Total Recovered</div>
                                <div className={classes.total}>{props.data.data.data.latest_data.recovered}</div>
                            </h2>

                            <h2 className={classes.legend}>
                                <div className={classes.color} style={{background: "blue"}}></div>
                                <div className={classes.description}>Cases Per Million</div>
                                <div className={classes.total}>{props.data.data.data.latest_data.calculated.cases_per_million_population}</div>
                            </h2>
                        </div>

                    </div>

                </div>
                <Typography variant="subtitle1" className={classes.Title} style={{paddingBottom: "2px", paddingTop:"4px"}}>
                    Chart
                </Typography>
                <div className={classes.overview} style={{height: '400px'}}>
                    <InfoPaperChart lineOneName='Total Deaths' lineTwoName='Total Cases' data={chartDataDaily} x='date' lineOne='deaths' lineTwo='confirmed'/>

                </div>
                <div className={classes.overview} style={{height: '400px'}}>
                    <InfoPaperChart lineOneName='Daily Deaths' lineTwoName='Daily Cases' data={chartDataToday} x='date' lineOne='new_deaths' lineTwo='new_confirmed'/>

                </div>

            </div>

        </div>


    );
};


export default InfoPaperMobile;