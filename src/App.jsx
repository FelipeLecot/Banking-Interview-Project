import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CreateAccount } from "./components/CreateAccount";
import { DeleteAccount } from "./components/DeleteAccount";
import { GetBalances } from "./components/GetBalances";
import { CreditBalance } from "./components/CreditBalances";
import { TransferBalances } from "./components/TransferBalances";
import { DebitBalance } from "./components/DebitBalances";

import './index.css';

export function App() {
    const balanceStates = useState(null);

    return (
        <>
            <Navbar />
            <div className="container mainScreen">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CreateAccount balanceStates={balanceStates} />} />
                        <Route path="/DeleteAccount" element={<DeleteAccount balanceStates={balanceStates} />} />
                        <Route path="/CreditBalance" element={<CreditBalance balanceStates={balanceStates} />} />
                        <Route path="/DebitBalance" element={<DebitBalance balanceStates={balanceStates} />} />
                        <Route path="/TransferBalances" element={<TransferBalances balanceStates={balanceStates} />} />
                    </Routes>
                </BrowserRouter>
                <GetBalances balanceStates={balanceStates}/>
            </div>
        </>
    );
}