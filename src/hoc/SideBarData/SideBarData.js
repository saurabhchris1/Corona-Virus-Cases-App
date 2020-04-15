import React from "react";
import SideBarButton from "../../Components/SideBarButton/SideBarButton";
import classes from './SideBarData.module.css';


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'totalCases', numeric: true, disablePadding: false, label: 'Total Cases' },

];



const SideBarData = (props) => {
console.log(props.data)
    let dataTable = props.data.map((country) => {
        return (
            <div className={classes.areaDiv}>
                <SideBarButton countryName={country.name} cases={country.totalCases} key={country.code} onClick={() => props.clickHandler(country.code)}/>
            </div>

            );

        }

    );

    return(
       <div>
           {dataTable}
       </div>

    );
}


export default SideBarData;