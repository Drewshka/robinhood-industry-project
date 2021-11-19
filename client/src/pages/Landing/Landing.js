import React from "react";
// import { Link } from "react-router-dom";
import "./Landing.scss";
import NFTContainer from "../../components/NFTContainer/NFTContainer";
import GameBanner from "../../components/GameBanner/GameBanner";


export default function Landing() {
  return (
    <div className="landing">
        <NFTContainer />
        <GameBanner />
    </div>
  );
}