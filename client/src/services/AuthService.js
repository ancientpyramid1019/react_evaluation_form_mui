import axios from 'axios'

const isLoggedUser = () => {
    console.log("==============")
    return axios.get("/api/main_deps");
}

const AuthService = {
    isLoggedUser,
}

export default AuthService;