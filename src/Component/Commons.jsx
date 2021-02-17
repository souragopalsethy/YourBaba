import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
function Commons(props) {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 >
                    Grow your business with <br/><strong className="brand-name">    YourBaba.com</strong>
                  </h1>
                  <h3 className="my-3">We have group of frustrated developers</h3>
                  <h2>{props.name}</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-success">{props.btnName}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-2 order-lg-2">
                  <img src={props.imgsrc}  className="animated commons-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Commons;
