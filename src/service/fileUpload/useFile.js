

import api from "../axios";

const headers =  {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useFile = {
    uploadFile: (data) => {
        return api.post("/image", data, {headers})
    },
    deleteFile: (fileName) => api.delete(`/image/${fileName}`, {
        headers : {
            Authorization: `Bearer ${localStorage.getItem("token")}` 
        }
    })
   
}

export default useFile;