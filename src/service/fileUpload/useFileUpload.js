

import api from "../axios";

const headers =  {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useFile = {
    createCountry: (data) => api.post("/image", data, {headers}),
    getCountry: (fileName) => api.get(`/image/${fileName}`, {
        headers : {
            Authorization: `Bearer ${localStorage.getItem("token")}` 
        }
    }),
   
}

export default useFile;