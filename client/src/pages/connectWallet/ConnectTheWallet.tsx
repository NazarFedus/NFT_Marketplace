import "./styles.css";

import arrow from "./../../img/arrow.svg";
import logo from "./../gettingStarted/img/Logo.svg";
import mainphoto from "./../../img/image 10.png";
import metamask from "./../../img/icons/metamask.png";
import trustwallet from "./../../img/icons/trustwallet.png";
import tab3 from "./../../img/icons/tab3.png";

import { NavLink } from "react-router-dom";
import Img from "../../components/imgGettingStarted/ImgGetStarted";
import ButtonLink from "../../components/buttonLink/ButtonLink";
import { useValidation } from "../../hooks/useValidation";
import React, { useState } from "react";

export default function ConnectTheWallet() {
  const [status, setStatus] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const {validate} = useValidation();

  function inputAddress(venue: string) {
    if(venue === 'MetaMask') setStatus('MetaMask');
    if(venue === 'Trust Wallet') setStatus('MetaMask');
    if(venue === 'Ethereum address') setStatus('MetaMask');
  }

  function changeHandler(e : React.ChangeEvent<HTMLInputElement>){
    console.log(validate(e.currentTarget.value));
    setIsValid(validate(e.currentTarget.value))

  }

  return (
    <div className="connectWallet">
      <header className="connectWallet__header">
        <NavLink to="/start">
          <button>
            <img src={arrow} className="arrowback" alt="arrowback" />
          </button>
        </NavLink>
        <div className="wrapperlogo">
          <img src={logo} alt="Logo" className="connectWallet__logo" />
        </div>
      </header>

      <main>
        <div className="connectWallet__topcontent">
          <Img path={mainphoto}></Img>
          <div className="main__frame">
            <h1>Choose your wallet</h1>
            <p>
              By connecting your wallet you agree to our{" "}
              <span>Terms of Service</span> and <span>Privacy Policy</span>
            </p>
          </div>
        </div>

        <div className="main__tablist">
          <button className="tab" onClick={() => inputAddress("MetaMask")}>
            <img src={metamask} className="icon" />
            <p className="tabname">MetaMask</p>
          </button>
          <button className="tab" onClick={() => inputAddress("Trust Wallet")}>
            <img src={trustwallet} className="icon" />
            <p className="tabname">Trust Wallet</p>
          </button>
          <button
            className="tab"
            onClick={() => inputAddress("Ethereum address")}
          >
            <img src={tab3} className="icon" />
            <p className="tabname">Enter ethereum address</p>
          </button>
        </div>
      </main>

      {!status && (
        <footer>
          <NavLink to={"/setup-profile"}>
            <ButtonLink title="Continue" />
          </NavLink>
        </footer>
      )}
      {status && (
        <footer className="footer-active">
          <div>
            <h1>Enter {status} address</h1>
            <div className="input__form">
              <label htmlFor="Address">Address</label>
              <input onChange={changeHandler}></input>
              {!isValid && <p style={{color: 'red', fontSize: '12px'}}>Invalid address. Please enter valid address!</p>}
            </div>

            <NavLink to={"/setup-profile"} >
              <ButtonLink title="Continue" />
            </NavLink>
          </div>
        </footer>
      )}
    </div>
  );
}
