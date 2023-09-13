


import api from "../axios";

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useAuthor = {
    createAuthor: (data) => api.post("/author", data, {
        headers : {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}` 
        }
    }),
    getAuthor: () => api.get("/author", {headers}),
    getAuthorItem: (id) => api.get(`/author/${id}`, {headers}),
    updateAuthor: (id,data) => api.put(`/author/${id}`, data, {headers}),
    deleteAuthor: (id) => api.delete(`/author/${id}`, {headers}),
}

export default useAuthor;