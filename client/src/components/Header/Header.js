import React from "react";
// import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logos/Robinhood-logo-768x432.jpeg";
import icon from "../../assets/icons/arrow_drop_down-24px.svg";

export default function Header() {
  return (
    <div className="header">
      <article className="header__container">
        <img src={logo} alt="logo" className="header__logo" />
        <ul className="header__list">
          <li className="header__list-item">
            Products
            <img src={icon} alt="logo" className="header__icon" />
          </li>
          <li className="header__list-item">
            Learn
            <img src={icon} alt="logo" className="header__icon" />
          </li>
          <li className="header__list-item">Support</li>
          <li className="header__list-item">
            Who we are
            <img src={icon} alt="logo" className="header__icon" />
          </li>
        </ul>
      </article>
      <button className="header__button">Button</button>
    </div>
  );
}
