import React, {useRef, useState} from "react";
import {copyTextToClipboard} from "../hooks/copyToClipBoard.js"

export default function BalanceCards({account}) {
    const [isCopied, setIsCopied] = useState(false);
  
    const idInput = useRef();

    const handleCopyClick = () => {
        copyTextToClipboard(idInput.current.value)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }

  return (
    <li className="balances-card" >
          <div>
            <div className="card-top-part">
            <div className={"status-marker " + ((account.active) ? "enabled" : "disabled")}></div>
            <p className="name">Account ID: </p>
            <div>
              <input ref={idInput} readOnly type="text" value={account._id} />
              <button onClick={handleCopyClick}>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            </div>
          </div>
          <div className="card-bottom-part">
            <div className="bottom-part">
              ARS: {account.ars}
            </div>
            <div className="bottom-part">
              USD: {account.usd}
            </div>
          </div>
        </li>
  )
}
