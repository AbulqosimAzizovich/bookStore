import axios from "axios";




const api = axios.create({
    baseURL: "https://literature-18wr.onrender.com/api",
});


export default api;