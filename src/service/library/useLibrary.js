








import api from "../axios";

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useLibrary = {
    createLibrary: (data) => api.post("/library", data),
    getLibrary: () => api.get("/library", {headers}),
    getLibraryItem: (id) => api.get(`/library/${id}`, {headers}),
    updateLibrary: (id,data) => api.put(`/library/${id}`, data),
    deleteLibrary: (id) => api.delete(`/library/${id}`, {headers}),
}

export default useLibrary;