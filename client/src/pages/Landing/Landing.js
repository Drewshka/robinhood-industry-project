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
          <form className="form">
            <h1>What is an NFT?</h1>
            <article className="form-wrapper">
              <div className="form-container">
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                <label for="contactChoice1">Email</label>
                <input
                  type="radio"
                  id="contactChoice2"
                  name="contact"
                  value="phone"
                />
                <label for="contactChoice2">Phone</label>
                <input
                  type="radio"
                  id="contactChoice3"
                  name="contact"
                  value="mail"
                />
                <label for="contactChoice3">Mail</label>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="answer4"
                />
                <label for="contactChoice1">answer4</label>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </article>
          </form>
          <pre id="log"></pre>
        </div>
        <div>
          <form className="form">
            <h1>What is an NFT?</h1>
            <article className="form-wrapper">
              <div className="form-container">
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                <label for="contactChoice1">Email</label>
                <input
                  type="radio"
                  id="contactChoice2"
                  name="contact"
                  value="phone"
                />
                <label for="contactChoice2">Phone</label>
                <input
                  type="radio"
                  id="contactChoice3"
                  name="contact"
                  value="mail"
                />
                <label for="contactChoice3">Mail</label>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="answer4"
                />
                <label for="contactChoice1">answer4</label>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </article>
          </form>
          <pre id="log"></pre>
        </div>
        <div>
          <form className="form">
            <h1>What is an NFT?</h1>
            <article className="form-wrapper">
              <div className="form-container">
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                <label for="contactChoice1">Email</label>
                <input
                  type="radio"
                  id="contactChoice2"
                  name="contact"
                  value="phone"
                />
                <label for="contactChoice2">Phone</label>
                <input
                  type="radio"
                  id="contactChoice3"
                  name="contact"
                  value="mail"
                />
                <label for="contactChoice3">Mail</label>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="answer4"
                />
                <label for="contactChoice1">answer4</label>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </article>
          </form>
          <pre id="log"></pre>
        </div>
        {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
      </Carousel>
    </div>
  );
}
