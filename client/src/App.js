import "./App.css";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Admin/Dashboard";
import Admin from "./Components/Admin/Admin";
import SubDepartments from "./Components/Admin/SubDepartments";
import Evaluators from "./Components/Admin/Evaluators";
import Employees from "./Components/Admin/Employees";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthService from "./services/AuthService";

// const isLogOut = true;

const App = () => {

  const [isLogOut, setIsLogOut] = useState((
    localStorage.getItem('user_info') === null
  || localStorage.getItem('user_info') === undefined
  || localStorage.getItem('user_info') === ""));
  const [userRole, setUserRole] = useState("");
  const [userstate, setUserState] = useState({});
    
  
  useEffect(() => {
    
    if (!isLogOut) {
      // AuthService.isLoggedUser()
      // .then(() => {
        setUserRole((JSON.parse(localStorage.getItem('user_info')).roles[0]).toString());
    //     return;
      // })
      // .catch(() => {
      //   localStorage.removeItem('user_info');
        // setIsLogOut(true);
        // return;
      // })
    } else {
      localStorage.setItem('user_info', '');
    }
  }, []);

  // isLogOut = (localStorage.getItem('user_info') === null
  //   || localStorage.getItem('user_info') === undefined
  //   || localStorage.getItem('user_info') === "");

  // useEffect(() => {
  //   isLogOut = ((localStorage.getItem('user_info') === null
  //   || localStorage.getItem('user_info') === undefined
  //   || localStorage.getItem('user_info') === ""));

  //   if (!isLogOut) {
  //     setUserRole((JSON.parse(localStorage.getItem('user_info')).roles[0]).toString());
  //   }
  // }, []);

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLogOut ? (
                <Login setUserState={setUserState} />
              ) : (
                userRole === "ROLE_ADMIN" ?
                (<Dashboard setUserState={setUserState} username={userstate.fname} />) : 
                (<Profile setUserState={setUserState} username={userstate.fname} />) 
              )
            }
          ></Route>

          <Route path="/admin" element={<Dashboard setUserState={setUserState} username={userstate.fname}/>} />
          <Route path="/admin/dashboard" element={<Dashboard setUserState={setUserState} username={userstate.fname}/>} />
          <Route path="/admin/main_depart" element={<Admin setUserState={setUserState} username={userstate.fname}/>} />
          <Route path="/admin/sub_depart" element={<SubDepartments setUserState={setUserState} username={userstate.fname}/>} />
          <Route path="/admin/evaluators" element={<Evaluators setUserState={setUserState} username={userstate.fname}/>} />
          <Route path="/admin/employees" element={<Employees setUserState={setUserState} username={userstate.fname}/>} />
          
          <Route path="/login" element={<Login setUserState={setUserState} />} />
          <Route path="/signup" element={<Register />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
