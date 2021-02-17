import React, { useState } from "react";
function Card(props) {

  return (
    <>
              <div className="col-md-4 col-10 mx-auto card-effect">
                <div class="card shadow-lg p-3 mb-5 bg-black rounded">
                  <img src={props.imgSrc} class="card-img-top card-img" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{props.cardText}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            
            
    </>
  );
}

export default Card;
