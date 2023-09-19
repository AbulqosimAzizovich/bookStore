import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from "./router/index.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from "react-router-dom";
import i18next from "./i18n";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode >
)
