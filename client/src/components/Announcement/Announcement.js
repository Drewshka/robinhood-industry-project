import React from "react";
import "./Announcement.scss";
import twttr from "../../assets/images/twttr.png";
import punk from "../../assets/images/punk.png";

export default function Announcement() {
  return (
    <div className="announcement-bar">
      {/* <h1 className="announcement-bar__text">
        Play, learn, and win! Every Monday
      </h1> */}
      <img className="announcement-bar__twttr" alt="twttr" src={twttr} />
      <img className="announcement-bar__punk" alt="punk" src={punk} />
      <h2 className="announcement-bar__twttr-fact">
        The first tweet, sold for $2.9 million
      </h2>
      <h2 className="announcement-bar__punk-fact">
        CryptoPunk #7804 sold for $7.58 million
      </h2>
    </div>
  );
}
