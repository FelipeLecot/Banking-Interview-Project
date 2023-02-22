import React, {Fragment, useState, useEffect} from "react";

import {Navbar} from "./components/Navbar";
import {CreateAccount} from "./components/CreateAccount";
import {DeleteAccount} from "./components/DeleteAccount";
import {GetBalances} from "./components/GetBalances";
import {CreditBalance} from "./components/CreditBalances";
import {TransferBalances} from "./components/TransferBalances";
import {DebitBalance} from "./components/DebitBalances";

import './index.css';

export function App() {

     
    return(
        <Fragment>
            <Navbar/>
            <div className="container mainScreen">
                <CreateAccount />
                <DeleteAccount/>
            </div>
            <div className="container mainScreen">
              <GetBalances/>
              <CreditBalance/>
              <DebitBalance/>
              <TransferBalances/>
            </div>
        </Fragment>
    );
}