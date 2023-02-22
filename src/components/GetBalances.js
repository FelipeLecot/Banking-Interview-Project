import React, { useState, useEffect } from 'react';

export function GetBalances() {
  const [balances, setBalances] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchBalances() {
      try {
        const response = await fetch('https://api-interview.do2software.com/v1/getBalances', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        const result = await response.json();
        console.log(response)

        if (result.status === 'ok') {
          setBalances(result.data);
        } else {
          setStatus(`Error: ${result.errorCode}`);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchBalances();
  }, []);

  return (
    <div className='custom-card'>
      <h1>Get Balances</h1>
      {balances.length > 0 ? (
        <ul>
          {balances.map((balance) => (
            <li key={balance.accountId}>
              Account ID: {balance.accountId}, Balance: {balance.amount}
            </li>
          ))}
        </ul>
      ) : (
        <p>No balances found.</p>
      )}
      {status && <p>{status}</p>}
    </div>
  );
};