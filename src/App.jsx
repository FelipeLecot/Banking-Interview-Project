import React, { Fragment, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Error } from "./components/Error";
import { CreateAccount } from "./components/CreateAccount";
import { DeleteAccount } from "./components/DeleteAccount";
import { GetBalances } from "./components/GetBalances";
import { CreditBalance } from "./components/CreditBalances";
import { TransferBalances } from "./components/TransferBalances";
import { DebitBalance } from "./components/DebitBalances";

import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="container mainScreen"><CreateAccount /></div>,
        errorElement: <div className="container mainScreen"><Error/></div>
    },
    {
        path: "/DeleteAccount",
        element: <div className="container mainScreen"><DeleteAccount /></div>,
    },
    {
        path: "/GetBalances",
        element: <div className="container mainScreen"><GetBalances /></div>,
    },
    {
        path: "/CreditBalance",
        element: <div className="container mainScreen"><CreditBalance /></div>,
    },
    {
        path: "/DebitBalance",
        element: <div className="container mainScreen"><DebitBalance /></div>,
    },
    {
        path: "/TransferBalances",
        element: <div className="container mainScreen"><TransferBalances /></div>,
    },
]);


export function App() {
    return (
        <Fragment>
            <Navbar />
            <RouterProvider router={router} />
        </Fragment>
    );
}