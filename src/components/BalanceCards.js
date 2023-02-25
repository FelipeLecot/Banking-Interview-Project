import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef, useState} from "react";
import {copyTextToClipboard} from "../hooks/copyToClipBoard.js"
import { faSquareCheck, faCopy } from '@fortawesome/free-solid-svg-icons'

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
            <div className="id-input-container">
              <input className="id-input" ref={idInput} readOnly type="text" value={account._id} />
              <button onClick={handleCopyClick}>
                <span>{isCopied ? <FontAwesomeIcon icon={faSquareCheck} /> : <FontAwesomeIcon icon={faCopy} />}</span>
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
