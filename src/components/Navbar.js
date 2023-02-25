import React from 'react'

export function Navbar() {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <a href='/' className='navbar-brand'>Create Account</a>
                <a href='/DeleteAccount' className='navbar-brand'>Delete Account</a>
                <div className="nav-item dropdown">
                    <a className="navbar-brand dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Balances</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/CreditBalance">Credit Balance</a></li>
                        <li><a className="dropdown-item" href="/DebitBalance">Debit Balance</a></li>
                        <li><a className="dropdown-item" href="/TransferBalances">Transfer Balance</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}