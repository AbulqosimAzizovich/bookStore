

import api from "../axios";

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useUser = {
    createUser: (data) => api.post("/user", data),
    getUser: () => api.get("/user", {headers}),
    getUserItem: (id) => api.get(`/user/${id}`, {headers}),
    updateUser: (id,data) => api.put(`/user/${id}`, data),
    deleteUser: (id) => api.delete(`/user/${id}`, {headers}),
}

export default useUser;