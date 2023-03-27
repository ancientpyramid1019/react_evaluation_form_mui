import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

import {
  Button,
} from "@mui/material";

const styles = {
  primaryBackgroundColor: {
    backgroundColor: 'rgb(103, 58, 183)', 
  },
}

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    lname: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    // const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.lname) {
      error.lname = "lname is required";
    } 
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {

      axios.post("/api/auth/signin", {username: user.lname, password: user.password}).then((res) => {
        
        localStorage.setItem('user_info', JSON.stringify(res.data.user));
        
        setUserState(res.data.user);
        navigate("/");
        window.location.reload();
      });
    }
  }, [formErrors]);
  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Name"
          onChange={changeHandler}
          value={user.lname}
        />
        <p className={basestyle.error}>{formErrors.lname}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={ loginHandler }
          className={basestyle.button_common}
          style={{...styles.primaryBackgroundColor, margin: '20px auto', width: '40%', marginLeft: '0px', borderRadius: '20px'}}>
            Login
        </Button>
        {/* <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button> */}
      </form>
      <NavLink to="/signup">Not yet registered? Register Now</NavLink>
    </div>
  );
};
export default Login;
