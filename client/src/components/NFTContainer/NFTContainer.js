import React from "react";
// import { Link } from "react-router-dom";
import "./NFTContainer.scss";

export default function NTFContainer() {
  return (
    <div className="ntfcontainer">
        
        {/* <div class="container__title-box">
            <h1 class="container__title-box-text">Hawaii</h1>
        </div> */}
        <div className="card-container">
            <div className="card"> 
                <h2 className="card__title">Friday</h2>
                {/* <ul class="card__list">
                    <li class="card__item">Breakfast</li>
                    <li class="card__item">Lunch</li>
                    <li class="card__item">Dinner</li>
                    <li class="card__item">Snorkeling</li>
                </ul> */}
            </div>        
            <div className="card"> 
                <h2 className="card__title">Saturday</h2>
                {/* <ul class="card__list">
                    <li class="card__item">Breakfast</li>
                    <li class="card__item">Lunch</li>
                    <li class="card__item">Dinner</li>
                    <li class="card__item">Snorkeling</li>
                </ul> */}
            </div>
            <div className="card">   
                <h2 className="card__title">Sunday</h2>
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