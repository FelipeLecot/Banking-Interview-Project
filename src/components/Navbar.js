import React from 'react'

export function Navbar() {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <a href='#' className='navbar-brand'>Create Account</a>
                <a href='#' className='navbar-brand'>Delete Account</a>
                <div className="nav-item dropdown">
                    <a class="navbar-brand dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Balances</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Get Balances</a></li>
                        <li><a className="dropdown-item" href="#">Credit Balance</a></li>
                        <li><a className="dropdown-item" href="#">Debit Balance</a></li>
                        <li><a className="dropdown-item" href="#">Transfer Balance</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}