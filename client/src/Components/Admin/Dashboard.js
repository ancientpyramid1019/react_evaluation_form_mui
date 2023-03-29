// Main Department Table Front of Admin
import React, { useState, useEffect, useReducer } from 'react';
import "./table.css";
import NavBar from '../Layouts/NavBar'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DepartmentService from '../../services/DepartmentService';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// Snack Bar
import Snackbar from '@mui/material/Snackbar';
//Alert
import MuiAlert from '@mui/material/Alert';
import { borderRadius } from '@mui/system';

import styles from '../styles';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

const StartBar = (props) => {
    const starCnt = Math.floor(props.starCnt / 2);
    const starHalfCnt = parseFloat(props.starCnt / 2) - parseInt(starCnt) >= 0.4 ? 1 : 0;
    let starElement = [];

    let key = 0;

    for (let i = 0; i < starCnt; i++) {
        starElement.push(<StarIcon key={key} />);
        key++;
    }

    console.log(starElement);
    if (starHalfCnt == 1)
        starElement.push(<StarHalfIcon key={key} />);
        key++;

    for (let i = 0; i < 5-starCnt-starHalfCnt; i++) {
        starElement.push(<StarBorderIcon key={key} />);
    }
    
    // console.log(starElement);
    return <Box sx={{margin: 'auto', marginRight: '0px'}}>{starElement}</Box>;
}

export default function Dashboard() {

    const [rows, setRows] = useState([]);
    const [criteriaList, setCriteriaList] = useState([]); //html tags
    const [users, setUsers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [criterias, setCriterias] = useState([]); //all criterias

    const [empCriterias, setEmpCriterias] = useState([]); //set employee's criteria

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
            setUsers(res.data);
        })
        .catch(e => console.log(e));
    }
    // Get All Main Department data from Backend
    const getAllEmployees = () => {
        DepartmentService.getAllEmployees()
        .then((res) => {
            setEmployees(res.data);
        })
        .catch(e => console.log(e));
    }

    const handleCardClick = (row) => {
        console.log(row);
    }

    useEffect(() => {
        getAllUsers();
        getAllEmployees();
    }, []);

    useEffect(() => {
        // let htmlItems = [];
        let criterisItems = [];

        console.log(rows);
        for (let i = 0; i < users.length; i++) {
            // console.log(users[i]);
            if (users[i].roles[0].name !== "admin" && users[i].criteria.length > 0) {
                for (let j = 0; j < users[i].criteria.length; j++) {
                    const criteria = users[i].criteria[j];
                    if (criteria.emp_id !== null) {
                        let item = {
                            id: criteria._id,
                            title: criteria.title,
                            grade: criteria.grade,
                            employee: criteria.emp_id.name,
                            employee_id: criteria.emp_id._id,
                            evaluator: users[i].username,
                            sub_dep_id: criteria.emp_id.sub_dep_id,
                        }
                        
                        criterisItems.push(item);
                        // htmlItems.push(
                        //     <Card key={item.id} sx={{ minWidth: 275, margin:'auto', marginBottom: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#744bbd' }}>
                        //         <CardContent>
                        //             <Typography sx={{ fontSize: 14 }} gutterBottom>
                        //                 {item.title}
                        //             </Typography>
                        //             <Typography variant="h5" component="div">
                        //                 {item.employee}: {item.grade}
                        //             </Typography>
                        //             {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        //                 {item.grade}
                        //             </Typography> */}
                        //         </CardContent>
                        //         {/* <CardActions>
                        //         <Button size="small">Learn More</Button>
                        //         </CardActions> */}
                        //     </Card>
                        // );
                    }
                }
            }
        }

        

        setCriterias(criterisItems);
        // setCriteriaList(htmlItems);
    }, [users])

    useEffect(() => {
        const empArray = employees.map((employee) => {
          let criterias_arr = criterias.filter((criteria) => criteria.employee_id === employee._id);
          
          let scoreSum = criterias_arr.reduce((sum, criteria) => sum + criteria.grade, 0);
          let avgScore = criterias_arr.length > 0 ? scoreSum / criterias_arr.length : 0;

          return {
            id: employee._id,
            name: employee.name,
            criterias: criterias_arr,
            score: avgScore.toFixed(2)
          };
        });
        empArray.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        console.log(empArray);
        setRows(empArray);
    }, [users, criterias, employees]);


    useEffect(() => {
        let htmlItems = [];

        console.log(rows);

        rows.filter(row => {
            return row.criterias.length > 0
        }).map((row, idx) => {
            htmlItems.push(
                <Card key={row._id} onClick={handleCardClick.bind(this, row)} sx={{ minWidth: 275, margin:'auto', marginBottom: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#744bbd' }}>
                    <CardContent sx={{ display: 'flex' }}>
                        <span style={{ width: '2em', height: '2em', textAlign: 'center', fontWeight: 'bold', color: '#744bbd', fontSize: 14, padding: '.3em', marginRight: '20px', borderRadius: '50%', backgroundColor: '#fff' }}>
                            {idx + 1}
                        </span>
                        <Typography variant="h5" component="div">
                            {row.name}: {row.score}
                        </Typography>
                        <StartBar starCnt={row.score}/>
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {item.grade}
                        </Typography> */}
                    </CardContent>
                    {/* <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            );
        })
            
        setCriteriaList(htmlItems);
    }, [rows, users])

    return (
        <>
            <NavBar />
            <Box sx={{ padding: 'auto 30px' }} style={styles.paperContent}>
                <Snackbar variant="filled" open={openAlert} autoHideDuration={6000} onClose={setOpenAlert.bind(this, false)}>
                    <Alert onClose={setOpenAlert.bind(this, false)} severity={alertType} sx={{ width: '100%' }}>
                    {msgAlert}
                    </Alert>
                </Snackbar>
                {/* <Box sx={{display: 'flex', width: '100%', height: '100%', flexWrap: 'wrap', padding: '30px 50px'}}>
                    { criteriaList }
                </Box> */}
                <Box sx={{padding: '20px 30px'}}>
                    { criteriaList }
                </Box>
            </Box>
        </>
    )
}
