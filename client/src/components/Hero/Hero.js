import React from "react";
import "./Hero.scss";
import pixels from "../../assets/images/pixel-robinhood.png";

export default function Hero() {
  return (
    <div>
      <section className="hero-banner">
        <h1 className="hero-title">NFT's are here. Education is power.</h1>
        <img className="hero-img" alt="pixel-robinhood" src={pixels} />
      </section>
    </div>
  );
}