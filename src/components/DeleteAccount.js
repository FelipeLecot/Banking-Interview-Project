import React, { useState } from 'react';

export function DeleteAccount() {
    const [accountId, setAccountId] = useState('');
    const [status, setStatus] = useState(null);

    const handleInputChange = (event) => {
        setAccountId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api-interview.do2software.com/v1/deleteAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: accountId }),
                
            });
console.log(response);
            const result = await response.json();
            console.log(result);
            
            if (result.status === 'ok') {
                setStatus(`Account with ID ${accountId} disabled successfully`);
            } else {
                setStatus(`Error: ${result.errorCode}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div class="custom-card">
            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                </div>
                <div class="circle">
                    <span class="yellow box"></span>
                </div>
                <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>
            <div class="card__content">
                <h1>Delete Account</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Account ID:
                        <input className='input' type="text" value={accountId} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Disable Account</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
};
