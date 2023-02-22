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
                <h2>➕</h2>
                <form onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    <label className='label'>Owner Name:</label>
                    <input className='input' type="text" value={owner} onChange={handleInputChange} />
                    <button type="submit">Create Account</button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </div>
    );
};

