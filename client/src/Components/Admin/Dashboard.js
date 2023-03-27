// Main Department Table Front of Admin
import React, { useState, useEffect, useReducer } from 'react';
import "./table.css";
import NavBar from '../Layouts/NavBar'

import {
    TextField,
    Box,
    Button,
    IconButton,
} from "@mui/material";

import DepartmentService from '../../services/DepartmentService';

// Snack Bar
import Snackbar from '@mui/material/Snackbar';
//Alert
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Dashboard() {

    const [rows, setRows] = useState([]);

    // show and hide Error Alert
    const [openAlert, setOpenAlert] = useState(true);
    // set alert message
    const [msgAlert, setMsgAlert] = useState("This is Dashboard Page");
    // show and hide Error Alert
    const [alertType, setAlertType] = useState("info");

    // Get All Main Department data from Backend
    const getAllUsers = () => {
        DepartmentService.getAllUsers()
        .then((res) => {
            setRows(res.data);
        })
        .catch(e => console.log(e));
    }

    useEffect(() => {
        getAllUsers();
    }, []);


    return (
        <>
            <NavBar />
            <Box sx={{ padding: 'auto 30px' }}>
                <Snackbar variant="filled" open={openAlert} autoHideDuration={6000} onClose={setOpenAlert.bind(this, false)}>
                    <Alert onClose={setOpenAlert.bind(this, false)} severity={alertType} sx={{ width: '100%' }}>
                    {msgAlert}
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}
