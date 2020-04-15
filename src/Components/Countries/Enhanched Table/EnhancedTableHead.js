import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableHead from "@material-ui/core/TableHead";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

const EnhanchedTableHead = (props) => {
    const classes = useStyles();
    const createSortHandler = (property) => (event) => {
        props.onRequestSort(event, property);
    };
    return(

        <TableHead>
            <TableRow>

                {props.headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={props.orderBy === headCell.id ? props.order : false}
                    >
                        <TableSortLabel
                            active={props.orderBy === headCell.id}
                            direction={props.orderBy === headCell.id ? props.order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {props.orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                  {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );

}

export default EnhanchedTableHead;