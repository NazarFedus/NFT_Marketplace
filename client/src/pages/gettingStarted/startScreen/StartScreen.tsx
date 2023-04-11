import ButtonLink from "../../../components/buttonLink/ButtonLink";
import "./styles.css";
import { NavLink } from "react-router-dom";

import arrow from "./../../../img/arrow.svg";
import logo from "./../img/Logo.svg";
import ellipseBlue from "./../img/Ellipse 13.svg";
import ellipseWhite from "./../img/Ellipse 12.svg";

export default function StartScreen() {
  return (
    <div>
      <div className="startScreen__logowrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <img src={ellipseBlue} className="ellipseBlue" alt="" />
      <img src={ellipseWhite} className="ellipseWhite" alt="" />

      <div className="startScreen__content">
        <div className="startScreen__infobox">
          <h1 className="startScreen__title">
            All NFTs are certifiably unique and ownable
          </h1>
          <p className="startScreen__text">
            A credible and excellent marketplace for non-fungible token.
          </p>
        </div>
        <div className="wrapp-buttons">
          <NavLink to="/connect-wallet">
            <ButtonLink title="Connect with Wallet"></ButtonLink>
          </NavLink>

          <button className="btn">
            <img src={arrow} className="arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
