











import api from "../axios";

const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useQuotes = {
    createQuotes: (data) => api.post("/quotes", data),
    getQuotes: () => api.get("/quotes", {headers}),
    getQuotesItem: (id) => api.get(`/quotes/${id}`, {headers}),
    updateQuotes: (id,data) => api.put(`/quotes/${id}`, data),
    deleteQuotes: (id) => api.delete(`/quotes/${id}`, {headers}),
}

export default useQuotes;