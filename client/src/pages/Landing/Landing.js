import React from "react";
// import { Link } from "react-router-dom";
import "./Landing.scss";
import NFTContainer from "../../components/NFTContainer/NFTContainer";
import Hero from "../../components/Hero/Hero";
import FunFacts from "../../components/FunFacts/FunFacts";
import Announcement from "../../components/Announcement/Announcement";
import Carousel from "../../components/Carousel/Carousel";

export default function Landing() {
  return (
    <div className="landing">
      <Hero />
      <NFTContainer />
      <FunFacts />
      <Announcement />
      <Carousel>
        <div>
          <h1>What is an NFT?</h1>
          <p>Answer 1</p>
          <p>Answer 2</p>
          <p>Answer 3</p>
          <p>Answer 4</p>
          <button>Submit</button>
        </div>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </div>
  );
}
