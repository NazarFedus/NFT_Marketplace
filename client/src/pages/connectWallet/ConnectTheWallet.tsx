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

export default function ConnectTheWallet() {
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
          <div className="tab">
            <img src={metamask} className="icon" />
            <p className="tabname">MetaMask</p>
          </div>
          <div className="tab">
            <img src={trustwallet} className="icon" />
            <p className="tabname">Trust Wallet</p>
          </div>
          <div className="tab">
            <img src={tab3} className="icon" />
            <p className="tabname">Enter ethereum address</p>
          </div>
        </div>
      </main>

      <footer>
        <NavLink to={"/setup-profile"}>
          <ButtonLink title="Continue" />
        </NavLink>
      </footer>
    </div>
  );
}
