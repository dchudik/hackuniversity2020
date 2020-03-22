import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
import {URL} from "../../redux/axios/config";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    table: {
        minWidth: '90%',
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function SimplePaper() {
    const classes = useStyles();
    const [dataErrors, setDataErrors] = useState([]);
    const getErrorsFetch = async () =>{
        const res = await axios.get(URL+"/errors")
        const json = await res.data;
        console.log(json);
        setDataErrors(json.errors);
    }
    useEffect( ()=>{
        getErrorsFetch();
    },[])
    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата и ремя</TableCell>
                            <TableCell align="right">Параметр</TableCell>
                            <TableCell align="right">Данные параметра</TableCell>
                            <TableCell align="right">Сообщение</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataErrors.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.dateTime}
                                </TableCell>
                                <TableCell align="right">{row.paramName}</TableCell>
                                <TableCell align="right">{row.paramValue}</TableCell>
                                <TableCell align="right">{row.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}