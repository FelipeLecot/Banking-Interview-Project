import React, { useState } from 'react'

export function CreateAccount() {
    const [owner, setOwner] = useState('');
    const [status, setStatus] = useState(null);

    const handleInputChange = (event) => {
        setOwner(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api-interview.do2software.com/v1/createAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ owner }),
            });
            
            const result = await response.json();

            if (result.status === 'ok') {
                setStatus(`Account created successfully with ID: ${result.data}`);
            } else {
                setStatus(`Error: ${result.errorCode}`);
            }console.log(result);
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
                <form onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    <label className='label'>Owner:</label>
                    <input className='input' type="text" value={owner} onChange={handleInputChange} />
                    <button type="submit">Create Account</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
};

