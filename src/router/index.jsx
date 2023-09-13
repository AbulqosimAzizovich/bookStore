

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home";
import Nasr from "../pages/Nasr";
import Nazm from "../pages/Nazm";
import Maqolalar from "../pages/Maqolalar";
import Forum from "../pages/Forum";

import NotFound from "../pages/NotFound";


import SingUp from "../pages/Auth/SignUp";
import SingIn from "../pages/Auth/SignIn";

import Profile from "../pages/Profile";

import SettingPage from "../pages/Setting";
import MyAccount from "../pages/Setting/MyAccount";
import Security from "../pages/Setting/Security";
import Setting from "../pages/Setting/Setting";

import Dashboard from "../pages/Dashboard";

import Author from "../pages/Author";
import Books from "../pages/Books";
import AuthorDetails from "../pages/Details/AuthorDetails";
import BookDetails from "../pages/Details/BookDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/author",
                element: <Author />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/author/:id",
                element: <AuthorDetails />
            },
            {
                path: "/books/:id",
                element: <BookDetails />
            },
            {
                path: "/nasr",
                element: <Nasr />
            },
            {
                path: "/nazm",
                element: <Nazm />
            },
            {
                path: "/maqola",
                element: <Maqolalar />
            },
            {
                path: "/forum",
                element: <Forum />
            },
            {
                path: "/profile",
                element: <Profile />
            }

        ]
    },
    {
        path: "/settings",
        element: <SettingPage />,
        children: [
            {
                path: "my-account",
                element: <MyAccount />
            },
            {
                path: "security",
                element: <Security />
            },
            {
                path: "setting",
                element: <Setting />
            }
        ]
    },

    {
        path: "/dashboard",
        element: <Dashboard />
    },

    {
        path: "/signup",
        element: <SingUp />
    },
    {
        path: "/signin",
        element: <SingIn />
    }
]);

export default router;