import React, { Fragment, useTransition } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import {
  Button, IconButton,
} from "@mui/material";
const styles = {
  primaryBackgroundColor: {
    backgroundColor: 'rgb(103, 58, 183)', 
    color: '#fff',
  },
  navStyle: {
    display: 'flex',
  },
}

const NavBar = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('user_info', '');
    navigate('/');
    window.location.reload('/');
  }

    const authLinks = (
      <ul>
        <li style={styles.navStyle}>
          <Link to="/admin/dashboard" style={styles.navStyle}>
            <DashboardIcon/>{" "}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li style={styles.navStyle}>
          <Link to="/admin/main_depart" style={styles.navStyle}>
            <HomeIcon/>{" "}
            <span className="hide-sm">Main Depart</span>
          </Link>
        </li>
        <li style={styles.navStyle}>
          <Link to="/admin/sub_depart" style={styles.navStyle}>
            <HolidayVillageIcon/>{" "}
            <span className="hide-sm">Sub Depart</span>
          </Link>
        </li>
        <li style={styles.navStyle}>
          <Link to="/admin/evaluators" style={styles.navStyle}>
            <VerifiedUserIcon/>{" "}
            <span className="hide-sm">Evaluators</span>
          </Link>
        </li>
        <li style={styles.navStyle}>
          <Link to="/admin/employees" style={styles.navStyle}>
            <SupervisedUserCircleIcon/>{" "}
            <span className="hide-sm">Employees</span>
          </Link>
        </li>
        <li style={styles.navStyle}>
          <IconButton
            variant="contained"
            color="primary"
            onClick={ logout }
            style={{...styles.primaryBackgroundColor, borderRadius: '20px'}}>
              <i className="fas fa-sign-out-alt"></i>
          </IconButton>
        </li>
      </ul>
    );
  
    return (
      <nav className="navbar bg-purple">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> 
          </Link>
        </h1>
        {/* {!loading && ( */}
          <Fragment>{authLinks}</Fragment>
        {/* )} */}
      </nav>
    );
};

export default NavBar;
