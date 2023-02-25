import React, { useState } from 'react';

export function CreditBalance({balanceStates}) {
    const [balances, setBalances] = balanceStates;
    const [id, setId] = useState('');
    const [account, setAccount] = useState('ars');
    const [quantity, setQuantity] = useState(0);
    const [status, setStatus] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('https://api-interview.do2software.com/v1/creditBalance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    account,
                    quantity,
                }),
            });
            const result = await response.json();
            if (result.status === 'ok') {
                let newBalances = balances.map((el) => {
                    if (el._id === id) {
                        el[account] += quantity
                    } 
                    return el
                })
                setBalances(newBalances)
                setStatus(`Successfully credited ${quantity} ${account} to account ${id}`);
            } else {
                setStatus(`Error: ${result.errorCode}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="custom-card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <h2>Credit Balance</h2>
                <form onSubmit={handleSubmit}>
                    <label className='label'>Account ID:</label>
                    <input className='input' type="text" value={id} onChange={(event) => setId(event.target.value)} />
                    <label className='label'>Currency Account:</label>
                        <select className='input' value={account} onChange={(event) => setAccount(event.target.value)}>
                            <option value="ars">ARS</option>
                            <option value="usd">USD</option>
                        </select>
                    <label className='label'>Quantity:</label>
                    <input className='input' type="number" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))} />
                    <button type="submit">Credit Balance</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>

    );
};
