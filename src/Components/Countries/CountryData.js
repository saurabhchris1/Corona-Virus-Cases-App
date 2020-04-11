import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from '../../axios-data';


class CountryData extends Component {

    state = {
        rows : [{country: 'India', total_death: 11, deaths_today: 11, total_confirmed: 11}, {country: 'aus', total_death: 11, deaths_today: 11, total_confirmed: 11}, {country: 'usa', total_death: 11, deaths_today: 11, total_confirmed: 11}]
    }

    createData = (country, total_death, deaths_today, total_confirmed) => {
        return { country, total_death, deaths_today, total_confirmed };
    };

    componentDidMount() {
        const fetchedRows = []
        axios.get('/countries').then(response => {


            for (let key in response.data.data){
                fetchedRows.push( this.createData(response.data.data[key].name, response.data.data[key].latest_data.deaths, response.data.data[key].today.deaths,response.data.data[key].latest_data.confirmed));
            }
            this.setState({rows: fetchedRows});

        }).catch(error => {
            console.log('This is the error', error);
            return error;
        });
    }


    descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => this.descendingComparator(a, b, orderBy)
            : (a, b) => -this.descendingComparator(a, b, orderBy);
    }

    stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
        { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
        { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
        { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
        { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
    ];

    //  EnhancedTableHead = (props) =>{
    // const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    // const createSortHandler = (property) => (event) => {
    //     onRequestSort(event, property);
    // };


    render() {
        return (

            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="center">Total Deaths</TableCell>
                            <TableCell align="center">New Deaths</TableCell>
                            <TableCell align="center">Total Cases</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            this.state.rows.map((row) =>(
                            <TableRow key={row.country}>
                                <TableCell align="center">{row.country}</TableCell>
                                <TableCell align="center">{row.total_death}</TableCell>
                                <TableCell align="center">{row.deaths_today}</TableCell>
                                <TableCell align="center">{row.total_confirmed}</TableCell>
                            </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        );
    }


}

export default CountryData;