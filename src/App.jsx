import React, { useState } from "react";
import { BrowserRouter, createBrowserRouter, Link, Route, Router, RouterProvider, Routes } from "react-router-dom";
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
        element: <CreateAccount />,
        errorElement: <Error/>
    },
    {
        path: "/DeleteAccount",
        element: <DeleteAccount /> ,
    },
    {
        path: "/CreditBalance",
        element: <CreditBalance />,
    },
    {
        path: "/DebitBalance",
        element: <DebitBalance />,
    },
    {
        path: "/TransferBalances",
        element: <TransferBalances />,
    },
]);


export function App() {
    const balanceStates = useState(null);

    return (
        <>
            <Navbar />
            <div className="container mainScreen">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CreateAccount balanceStates={balanceStates} />} />
                    </Routes>
                </BrowserRouter>
                <GetBalances balanceStates={balanceStates}/>
            </div>
        </>
    );
}