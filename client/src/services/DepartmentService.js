import axios from "axios";


const getAllMainDeps = () => {
    return axios.get("/api/main_deps");
};

const getAllSubDeps = () => {
    return axios.get("/api/sub_deps");
}

///////////////////// Start User Routes
// Get All Users
const getAllUsers = () => {
    return axios.get("/api/users");
}
// Delete Main Department
const delUser = (id) => {
    const data = {
        userId: id
    }
    return axios.delete("/api/user/delete", { data })
}
///////////////////// End User Routes


const addCriteria = (uID, criteria) => {
    return axios.post("/api/user/update", { 
        userId: uID, 
        criteria: criteria,
    })
}

//////////////////////Main Department

// Create New
const addMainDepart = (data) => {
    return axios.post("/api/main_dep/create", { 
        name: data.mainDepartName, 
    })
}

// Edit Main Department
const editMainDepart = (id, name) => {
    const data = {
        mainDepId: id,
        name: name
    }
    return axios.post("/api/main_dep/update", { data })
}

// Delete Main Department
const delMainDepart = (id) => {
    const data = {
        mainDepId: id
    }
    return axios.delete("/api/main_dep/delete", { data })
}

////////////////Sub Department

// Create New Sub Department
const addSubDepart = (data) => {
    return axios.post("/api/sub_dep/create", { 
        name: data.subDepartName, 
        main_dep_id: data.mainDepartID
    })
}

// Edit Sub Department
const editSubDepart = (main_id, id, name) => {
    const data = {
        subDepId: id,
        main_dep_id: main_id,
        name: name
    }
    return axios.post("/api/sub_dep/update", { data })
}

// Delete Main Department
const delSubDepart = (id) => {
    const data = {
        subDepId: id
    }
    return axios.delete("/api/sub_dep/delete", { data })
}


///////////////////// Start Employee Routes
// Get All Employees
const getAllEmployees = () => {
    return axios.get("/api/employees");
}
// Create New Employee
const addEmployee = (data) => {
    return axios.post("/api/employee/create", {
        name: data.name,
        sub_dep_id: data.subDepartID
    })
}
// Edit Employee
const editEmployee = (data, empID) => {
    return axios.post("/api/employee/update", {
        employeeId: empID,
        name: data.name,
        sub_dep_id: data.subDepartID
    })
}
// Delete Employee
const delEmployee = (id) => {
    const data = {
        employeeId: id
    }
    return axios.delete("/api/employee/delete", { data })
}
///////////////////// End Employee Routes



const DepartmentService = {
    getAllMainDeps,
    addMainDepart,
    editMainDepart,
    delMainDepart,

    getAllSubDeps,
    addSubDepart,
    editSubDepart,
    delSubDepart,

    getAllEmployees,
    addEmployee,
    editEmployee,
    delEmployee,

    getAllUsers,
    delUser,

    addCriteria,
};
  
export default DepartmentService;