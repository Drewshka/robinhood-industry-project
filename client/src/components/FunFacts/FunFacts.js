import React from "react";
import "./FunFacts.scss";

export default function FunFacts() {
  return (
    <div className="facts">
      <section className="fact-one">
        <h2 className="fact-one__title">Why they are important #1</h2>
        <div className="fact-one__box">
          <p className="fact-one__box-info">stat %</p>
        </div>
      </section>
      <section className="fact-two">
        <h2 className="fact-two__title">Why they are important #2</h2>
        <div className="fact-two__box">
          <p className="fact-two__box-info">give me data #</p>
        </div>
      </section>
    </div>
  );
}
