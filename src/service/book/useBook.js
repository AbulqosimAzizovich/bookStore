import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useBook = {
    createBook: (data) => api.post("/book", data, {headers}),
    getBook: () => api.get("/book", {
        headers
    }),
    getBookItem: (id) => api.get(`/book/${id}`, {
        headers
    }),
    updateBook: (id, data) => api.put(`/book/${id}`, data),
    deleteBook: (id) => api.delete(`/book/${id}`, {
        headers
    }),
}

export default useBook;