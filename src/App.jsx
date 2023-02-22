import React, {Fragment, useState, useEffect} from "react";
import {Navbar} from "./components/Navbar";
import {CreateAccount} from "./components/CreateAccount";
import {AccountsList} from "./components/AccountsList";
import {DeleteAccount} from "./components/DeleteAccount";
import {GetBalances} from "./components/GetBalances";

import './index.css';

export function App() {

     
    return(
        <Fragment>
            <Navbar/>
            <div className="container center">
                {/* <CreateAccount /> */}
                {/* <AccountsList accounts={accounts}/> */}
                <DeleteAccount/>
                {/* <GetBalances/> */}

            </div>
            
        </Fragment>
    );
}