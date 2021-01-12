import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Button } from 'antd';


const rows = [
    { id: 0, name: 'India', comment: "bg", person: 1324171354, status: 3287263 },
    { id: 1, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 2, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 3, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 4, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 5, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 6, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 7, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 8, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 9, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 10, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 11, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 12, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 13, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 14, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 15, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 16, name: 'India', comment: 'IN', person: 1324171354, status: 3287263 },
    { id: 17, name: 'Indiaaaa', comment: 'INaaa', person: 1324171354, status: 3287263 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function DataTable({ dataReserve }) {

    const myReserve = dataReserve.map(item => ({ ...item, restaurant_name: item.Partner.restaurant_name }));

    const columns = [
        //   { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'date', label: 'Date', minWidth: 170 },
        { id: 'time', label: 'Time', minWidth: 100 },
        { id: `restaurant_name`, label: 'Restaurant name', minWidth: 170 },
        { id: 'number_guest', label: 'Person', minWidth: 100 },
        { id: 'reserve_status', label: 'Status', minWidth: 100 },
        { id: 'note_comment', label: 'Comment', minWidth: 100 },
        { id: 'action', label: 'Action', minWidth: 100 },
    ];

    console.log("dataReserve come in", dataReserve)

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangeStatus = (id) => {
        console.log(id);
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={`${column.id}`}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myReserve.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            column.id !== 'action' ?
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                                :
                                                <TableCell key={column.id} align={column.align}>
                                                    <Button onClick={() => handleChangeStatus(row.id)}>Cancel</Button>
                                                </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
