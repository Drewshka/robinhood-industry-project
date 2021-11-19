import React from "react";
// import { Link } from "react-router-dom";
import "./Landing.scss";
import NFTContainer from "../../components/NFTContainer/NFTContainer";
import Hero from "../../components/Hero/Hero";
import FunFacts from "../../components/FunFacts/FunFacts";
import Announcement from "../../components/Announcement/Announcement";

export default function Landing() {
  return (
    <div className="landing">
      <Hero />
      <NFTContainer />
      <FunFacts />
      <Announcement />
    </div>
  );
}
