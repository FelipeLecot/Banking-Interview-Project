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
    <div className="custom-card balances">
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
        <h2>Balances</h2><br />
        {balances.length > 0 ? (
          <ul>
            {balances.map((balances, index) => (
              <li key={index} className="balances-card" >
                <div className="balances-card">
                  <div className="card-top-part">
                  <p className={balances.active ? "name green" : "name bg-red"}>Account ID: {balances._id}</p>
                  </div>
                </div>
                <div className="card-bottom-part">
                  <div className="bottom-part">
                    ARS: {balances.ars}
                  </div>
                  <div className="bottom-part">
                    USD: {balances.usd}
                  </div>
                </div>
              </li>
            ))}





          </ul>
        ) : (
          <p>No balances found.</p>
        )}
      </div>
    </div >
  );
};