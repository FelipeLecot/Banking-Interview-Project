import React, { useState, useEffect } from 'react';

export function GetBalances() {
  const [balances, setBalances] = useState([]);
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState(0);
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
        if (result.status === 'ok') {
          setBalances(result.data);
        } else {
          setStatus(`Error: ${result.errorCode}`);
        }
      } catch (error) {
      }
    }
    fetchBalances();
  }, []);

  return (
    <div class="custom-card balances">
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
        <h2>Balances</h2><br />
        {balances.length > 0 ? (
          <ul>
            {balances.map((balances) => (
              <li key={balances.id}>
                <strong>Account ID: </strong>{balances._id} | <strong>Balance ARS: </strong>{balances.ars} | <strong>Balance USD: </strong>{balances.usd} <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No balances found.</p>
        )}
      </div>
    </div>
  );
};