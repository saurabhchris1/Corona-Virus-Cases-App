import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InfoPaperGlobal from "../InfoPaper/InfoPaperGlobal";
import EnhancedTable from "../Countries/CountryTable";
import extClasses from './MobileMenu.module.css';
import InfoPaperMobile from "../InfoPaper/InfoPaperMobile";
import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AddBoxIcon from '@material-ui/icons/AddBox';
const TabPanel = (props) =>{
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '10px 10px 0px 0px',
    },
}));

const MobileMenu = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={extClasses.AppBar}>
                <div className={extClasses.MobilePullbar}></div>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Country  " icon={<LocationCityIcon />} {...a11yProps(0)} />
                    <Tab label="Global Cases" icon={<PublicIcon/>} {...a11yProps(1)} />
                    <Tab label="Select" icon={<AddBoxIcon />} {...a11yProps(2)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <InfoPaperMobile data={props.infoPaper}/>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <InfoPaperGlobal data={props.infoPaperGlobal}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EnhancedTable clickHandler={props.clickHandler} headCells={props.enhanchedTableHeadCells} rows={props.enhanchedTableRows}/>
            </TabPanel>

        </div>
    );
}

export default MobileMenu;