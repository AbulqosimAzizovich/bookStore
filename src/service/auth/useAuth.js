
import api from "../axios";

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useAuth = {
    register: (data) => api.post("/user/register", data, {headers}),
    login: (data) => api.post("/user/login", data)
}

export default useAuth;