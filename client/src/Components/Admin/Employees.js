// Employees Table Front of SubDepartments
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

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

// Select
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

//Snackbar
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
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'main_dep_name', label: 'Main Department', minWidth: 100 },
  { id: 'sub_dep_name', label: 'Sub Department', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 100 },
];

function createData(id, name, main_dep_name, sub_dep_name, action) {
  return {
    id,
    name,
    main_dep_name,
    sub_dep_name,
    action,
  };
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Employees() {
  
  const userId = JSON.parse(localStorage.getItem('user_info'))._id;
  const userRole = JSON.parse(localStorage.getItem('user_info')).username;

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [formData, setFormData] = useState({
    name: '',
    mainDepartID: '',
    subDepartID: '',
  });
  
  const [empID, setEmpID] = useState('');

  // Set state of managalbe data from backend
  const [mainDeps, setMainDeps] = useState([]);
  // Set state of managalbe data from backend
  const [subDeps, setSubDeps] = useState([]);
  // Set state of managalbe data from backend
  const [emps, setEmps] = useState([]);
  
  // show and hide modal
  const [openAddDialog, setOpenAddDialog] = useState(false);
  // show and hide edit modal
  const [openEditDialog, setOpenEditDialog] = useState(false);
  // show and hide Error Alert
  const [openAlert, setOpenAlert] = useState(true);
  // show and hide Confirm Modal
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  // set alert message
  const [msgAlert, setMsgAlert] = useState("This is Sub Department Management Page");
  // show and hide Error Alert
  const [alertType, setAlertType] = useState("info");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Get All Main Department from Backend
  const getAllMainDeps = () => {
    DepartmentService.getAllMainDeps()
    .then((res) => {
      setMainDeps(res.data);
    })
    .catch(e => console.log(e));
  }

  // This is the function to show the alert
  const showAlert = (type, msg) => {
    setAlertType(type);
    setMsgAlert(msg);
    setOpenAlert(true);
  }

  // Get All Main Department data from Backend
  const getAllSubDeps = () => {
    DepartmentService.getAllSubDeps()
    .then((res) => {
      setSubDeps(res.data);
    })
    .catch(e => console.log(e));
  }

  // Get All Employees data from Backend
  const getAllEmployees = () => {
    DepartmentService.getAllEmployees()
    .then((res) => {
      setEmps(res.data);
    })
    .catch(e => console.log(e));
  }

  // Modal input change function
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const addModalOpen = () => {
    setOpenAddDialog(true);
  }

  const addModalClose = () => {
    setOpenAddDialog(false);
  }

  // Edit Modal functions start
  const showEditDialog = (main_dep_id, sub_dep_id, emp_id, emp_name) => {
    setEmpID(emp_id);
    setFormData({ 
      mainDepartID: main_dep_id, 
      subDepartID: sub_dep_id, 
      name: emp_name, 
     });
    editModalOpen();
  } 

  const editModalOpen = () => {
    setOpenEditDialog(true);
  }

  const editModalClose = () => {
    setOpenEditDialog(false);
  }

  // Add Employee to backend
  const addEmployee = () => {
    DepartmentService.addEmployee(formData)
    .then((res) => {
      getAllEmployees();
      addModalClose();
      showAlert("success", "Successfully created!");
    })
    .catch(e => {
      console.log(e);
    })
  }

  // Edit Employee to backend
  const editEmployee = () => {
    DepartmentService.editEmployee(formData, empID)
    .then((res) => {
      getAllEmployees();
      addModalClose();
      showAlert("success", "Successfully updated!");
    })
    .catch(e => {
      console.log(e);
    })
  }

  // Delete Employee from backend
  const delEmployee = () => {
    DepartmentService.delEmployee(empID)
    .then((res) => {
      showAlert("success", "Successfully deleted!");
      confirmDialogClose();
      getAllEmployees();
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        confirmDialogClose();
        showAlert("warning", "Sorry, Unable to delete this user.");
      } else {
        console.log(error);
      }
    })
  }

  /////////// Start Confirm Dialog
  const showConfirmDialog = (emp_id) => {
    setEmpID(emp_id);
    confirmDialogOpen(true);
  } 

  const confirmDialogOpen = () => {
    setOpenConfirmDialog(true);
  };

  const confirmDialogClose = () => {
    setOpenConfirmDialog(false);
  };
  /////////// End Confirm Dialog

  useEffect(() => {
    getAllMainDeps();
    getAllSubDeps();
    getAllEmployees();
  }, []);

  useEffect(() => {
    getAllEmployees();
  }, [mainDeps]);

  useEffect(() => {
    let newItems = [];
      for (let i = 0; i < emps.length; i++) {
        const main_dep_name = mainDeps.length !== 0 
          ? mainDeps.filter(mainDep => mainDep ._id === emps[i].sub_dep_id.main_dep_id)[0].name
          : '';

        const main_dep_id = mainDeps.length !== 0 
          ? mainDeps.filter(mainDep => mainDep ._id === emps[i].sub_dep_id.main_dep_id)[0]._id
          : '';

        newItems.push(createData(
          i+1, 
          emps[i].name, 
          main_dep_name,
          emps[i].sub_dep_id.name, 
          <>
            <IconButton aria-label="edit" onClick={showEditDialog.bind(this, emps[i].sub_dep_id.main_dep_id, emps[i].sub_dep_id._id, emps[i]._id, emps[i].name)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={showConfirmDialog.bind(this, emps[i]._id)}>
              <DeleteIcon />
            </IconButton>
          </>  
        )
      )}
      setRows(newItems);
  }, [emps])


  return (
    <>
      <NavBar/>
      <Box sx={{ padding: 'auto 30px' }}>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={setOpenAlert.bind(this, false)}>
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
        <Box style={{display: 'flex'}}>
          <IconButton 
            variant="contained"
            color="primary"
            onClick={addModalOpen}
            style={{...styles.purpleBtnWithShadow, margin: 'auto 0px 20px auto', borderRadius: '20px'}}
            aria-label="delete">
            <AddIcon />
          </IconButton>
        </Box>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
        <Dialog open={openAddDialog} onClose={addModalClose}>
          <DialogTitle>Add Employee item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Type the Name of Employee.
            </DialogContentText>
            <Box>
              <FormControl fullWidth>
                <NativeSelect
                  inputProps={{
                    name: 'mainDepartID',
                    id: 'uncontrolled-native',
                  }}
                  name="mainDepartID"
                  value={formData.mainDepartID}
                  onChange={handleInputChange}
                  style={styles.modalSelectBox}
                >
                  <option key={0} value="">* Select Main Department</option>
                  {mainDeps && mainDeps.map((mainDep, idx) => (
                      <option key={idx+1} value={mainDep._id}>{mainDep.name}</option>
                  ))}
                </NativeSelect>
              </FormControl>
              <FormControl fullWidth>
                <NativeSelect
                  inputProps={{
                    name: 'subDepartID',
                    id: 'uncontrolled-native',
                  }}
                  name="subDepartID"
                  value={formData.subDepartID}
                  onChange={handleInputChange}
                  style={styles.modalSelectBox}
                >
                  <option key={0} value="">* Select Sub Department</option>
                  {subDeps && subDeps.filter((subDep) => {
                    return subDep.main_dep_id._id === formData.mainDepartID
                  }).map((subDep, idx) => (
                      <option key={idx+1} value={subDep._id}>{subDep.name}</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              fullWidth
              variant="standard"
              error={!(formData.name !== '' || formData.n !== undefined)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={addModalClose}>Cancel</Button>
            <Button onClick={addEmployee}>Add</Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openEditDialog} onClose={editModalClose}>
          <DialogTitle>Add Sub Department item</DialogTitle>
          <DialogContent>
          <Box>
              <FormControl fullWidth>
                <NativeSelect
                  inputProps={{
                    name: 'mainDepartID',
                    id: 'uncontrolled-native',
                  }}
                  name="mainDepartID"
                  value={formData.mainDepartID}
                  onChange={handleInputChange}
                  style={styles.modalSelectBox}
                >
                  <option key={0} value="">* Select Main Department</option>
                  {mainDeps && mainDeps.map((mainDep, idx) => (
                      <option key={idx+1} value={mainDep._id}>{mainDep.name}</option>
                  ))}
                </NativeSelect>
              </FormControl>
              <FormControl fullWidth>
                <NativeSelect
                  inputProps={{
                    name: 'subDepartID',
                    id: 'uncontrolled-native',
                  }}
                  name="subDepartID"
                  value={formData.subDepartID}
                  onChange={handleInputChange}
                  style={styles.modalSelectBox}
                >
                  <option key={0} value="">* Select Sub Department</option>
                  {subDeps && subDeps.filter((subDep) => {
                    return subDep.main_dep_id._id === formData.mainDepartID
                  }).map((subDep, idx) => (
                      <option key={idx+1} value={subDep._id}>{subDep.name}</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="name"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              fullWidth
              variant="standard"
              error={!(formData.name !== '' || formData.n !== undefined)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={editModalClose}>Cancel</Button>
            <Button onClick={editEmployee}>Edit</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openConfirmDialog}
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
            <Button onClick={delEmployee} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  )
}

export default Employees;
