import React from "react";
// import { Link } from "react-router-dom";
import "./NFTContainer.scss";

export default function NTFContainer() {
  return (
    <div className="nftcontainer">
      <h1 className="title">This week's all about NFT's!</h1>
      <h2 className="info">
        A Non-Fungible Token - NFT transforms digital works of art and other
        collectibles into one-of-a-kind, verifiable assets that are easy to
        trade on the blockchain.
      </h2>
      {/* <div class="container__title-box">
            <h1 class="container__title-box-text">Hawaii</h1>
        </div> */}
      <div className="card-container">
        <div className="card card-left">
          <h2 className="card__title">What makes it valuable?</h2>
          <p>
            NFT’s are digital assets that cannot be duplicated, replaced or
            replicated as the ownership of the digital asset is recorded on the
            blockchain. The NFT’s value is determined by the highest bidder
          </p>
          {/* <ul class="card__list">
                    <li class="card__item">Breakfast</li>
                    <li class="card__item">Lunch</li>
                    <li class="card__item">Dinner</li>
                    <li class="card__item">Snorkeling</li>
                </ul> */}
        </div>
        <div className="card card-center">
          <h2 className="card__title">How do you buy them?</h2>
          <p>
            Over 90% of NFTs are traded on Ethereum. The remaining percentage
            can be traded on coins like BNB or NEAR.
          </p>
          {/* <ul class="card__list">
                    <li class="card__item">Breakfast</li>
                    <li class="card__item">Lunch</li>
                    <li class="card__item">Dinner</li>
                    <li class="card__item">Snorkeling</li>
                </ul> */}
        </div>
        <div className="card card-right">
          <h2 className="card__title">Why are they popular?</h2>
          <p>
            It’s like collecting a one of a kind piece of art from Picasso!
            Collectors of the art world support independent creators by
            purchasing their works.{" "}
          </p>
          {/* <ul class="card__list">
                    <li class="card__item">Breakfast</li>
                    <li class="card__item">Lunch</li>
                    <li class="card__item">Dinner</li>
                    <li class="card__item">Snorkeling</li>
                </ul> */}
        </div>
      </div>
    </div>
  );
}
