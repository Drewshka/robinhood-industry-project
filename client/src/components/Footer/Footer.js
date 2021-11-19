import React from "react";
// import { Link } from "react-router-dom";
import information from "../../assets/images/footer-info.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer__h1">fake padding</h1>
      <img
        className="footer__info"
        alt="company-information"
        src={information}
      />
    </div>
  );
}
