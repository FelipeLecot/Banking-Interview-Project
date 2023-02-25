import React, { useEffect } from 'react';
import BalanceCards from './BalanceCards.js';

export function GetBalances({balanceStates}) {
  const [balances, setBalances] = balanceStates;
  
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
        }
      } catch (error) {
      }
    }
    fetchBalances();
  }, [setBalances]);

  const displayBalances = (array) => {
    let components = [];

    for (let i = array.length; i > 0; i--) {
      const el = array[i-1];
      components.push(
        <BalanceCards key={i} account={el} />
      )
    }
    return components
  }

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
        <h2>Balances</h2>
        {
        balances != null ? 
          (
            <ul>
              {displayBalances(balances)}
            </ul>
          ) 
        : 
          (
            <div className="spinner-box">
              <div className="pulse-container">  
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
              </div>
            </div>
          )
        }
          {(balances != null && balances.length === 0) ? <p>No balances found.</p> : null}
      </div>
    </div >
  );
};