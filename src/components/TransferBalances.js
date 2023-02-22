import React, { useState } from 'react';

export function TransferBalances() {
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [account, setAccount] = useState('ars');
    const [quantity, setQuantity] = useState(0);
    const [status, setStatus] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api-interview.do2software.com/v1/transferBalance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to,
                    from,
                    account,
                    quantity,
                }),
            });

            const result = await response.json();
            console.log(result);

            console.log(to);
            console.log(from);
            console.log(account);
            console.log(quantity);
            console.log(status);


            if (result.status === 'ok') {
                setStatus('Successfully transferred the balance!');
            } else {
                setStatus(`Error: ${result.errorCode}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

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
                <h2>Transfer Balance</h2>
                <form onSubmit={handleSubmit}>
                    <label className='label'>To account:</label>
                    <input className='input' type="text" value={to} onChange={(event) => setTo(event.target.value)} />
                    <label className='label'>From account:</label>
                    <input className='input' type="text" value={from} onChange={(event) => setFrom(event.target.value)} />
                    <label className='label'> Account type:</label>
                    <select className='input' value={account} onChange={(event) => setAccount(event.target.value)}>
                        <option value="ars">ARS</option>
                        <option value="usd">USD</option>
                    </select>
                    <label className='label'>Quantity:</label>
                    <input className='input' type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                    <button type="submit">Transfer balance</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
}
