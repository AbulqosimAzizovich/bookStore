






import api from "../axios";

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useComments = {
    createComments: (data) => api.post("/comments", data),
    getComments: () => api.get("/comments", {headers}),
    getCommentsItem: (id) => api.get(`/comments/${id}`, {headers}),
    updateComments: (id,data) => api.put(`/comments/${id}`, data),
    deleteComments: (id) => api.delete(`/comments/${id}`, {headers}),
}

export default useComments;