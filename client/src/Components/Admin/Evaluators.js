// Employee Table Front of Admin
import React, { useState, useEffect, useReducer } from 'react';
import "./table.css";
import NavBar from '../Layouts/NavBar'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

//Icons
import DeleteIcon from '@mui/icons-material/Delete';

import {
  TextField,
  Box,
  Button,
  IconButton,
} from "@mui/material";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DepartmentService from '../../services/DepartmentService';

//SnackBar
import Snackbar from '@mui/material/Snackbar';
//Alert
import MuiAlert from '@mui/material/Alert';
// import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

// Custom Style
import styles from '../styles';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'emp_name', label: 'Name', minWidth: 100 },
  { id: 'emp_role', label: 'Role', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 100 },
];

function createData(id, emp_name, emp_role, action) {
  return {
    id,
    emp_name,
    emp_role,
    action,
  };
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Evaluators() {
  
  const userId = JSON.parse(localStorage.getItem('user_info'))._id;
  const userRole = JSON.parse(localStorage.getItem('user_info')).username;

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [formData, setFormData] = useState({
    mainDepartName: '',
  });

  const [userID, setUserID] = useState('');
  
  // show and hide Error Alert
  const [openAlert, setOpenAlert] = useState(true);
  // show and hide Confirm Modal
  const [openConfirmDialogOpen, setOpenConfirmDialogOpen] = useState(false);
  // set alert message
  const [msgAlert, setMsgAlert] = useState("Only logged users will be here.");
  // show and hide Error Alert
  const [alertType, setAlertType] = useState("info");
  
  // Get All Main Department data from Backend
  const getAllUsers = () => {
    DepartmentService.getAllUsers()
    .then((res) => {
      let newItems = [];
      for (let i = 0; i < res.data.length; i++) {
        newItems.push(
          createData(i+1, 
          res.data[i].username, 
          res.data[i].roles[0].name, 
          <>
            <IconButton aria-label="delete" onClick={showConfirmDialog.bind(this, res.data[i]._id)}>
              <DeleteIcon />
            </IconButton>
          </>
        )
      )}
      setRows(newItems);
    })
    .catch(e => console.log(e));
  }

  // This is the function to show the alert
  const showAlert = (type, msg) => {
    setAlertType(type);
    setMsgAlert(msg);
    setOpenAlert(true);
  }
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  // Delete User from backend
  const delUser = () => {
    DepartmentService.delUser(userID)
    .then((res) => {
      showAlert("success", "Successfully deleted!");
      getAllUsers();
      confirmDialogClose();
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        confirmDialogClose();
        showAlert("warning", "Sorry, Unable to delete this user/");
      } else {
        console.log(error);
      }
    })
  }

  /////////// Start Confirm Dialog
  const showConfirmDialog = (user_id) => {
    setUserID(user_id);
    confirmDialogOpen(true);
  } 

  const confirmDialogOpen = () => {
    setOpenConfirmDialogOpen(true);
  };

  const confirmDialogClose = () => {
    setOpenConfirmDialogOpen(false);
  };
  /////////// End Confirm Dialog

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <NavBar/>
      <Box sx={{ padding: 'auto 30px' }}>
        <Snackbar variant="filled" open={openAlert} autoHideDuration={6000} onClose={setOpenAlert.bind(this, false)}>
          <Alert onClose={setOpenAlert.bind(this, false)} severity={alertType} sx={{ width: '100%' }}>
          {msgAlert}
          </Alert>
        </Snackbar>
        {/* <Collapse in={openAlert}>
          <Alert 
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            variant="filled" 
            severity={alertType}
          >
            {msgAlert}
          </Alert>
        </Collapse> */}
        <Paper sx={{ width: '100%', overflow: 'hidden' }} style={styles.paperContent}>
          <TableContainer sx={{}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align} 
                      style={styles.primaryBackgroundColor}
                      // style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
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
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <Dialog
          open={openConfirmDialogOpen}
          onClose={confirmDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Item Dialog."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={confirmDialogClose}>Disagree</Button>
            <Button onClick={delUser} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  )
}

export default Evaluators;
