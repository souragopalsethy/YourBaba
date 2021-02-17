import React, { useState } from "react";
import Card from "./Card"
import cardDataJson from "../Jsons/cardData.json"
function Service() {

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {cardDataJson.map((x, index) =>
                <Card cardText={x.cardText} imgSrc={x.imgSrc} />)}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Service;
