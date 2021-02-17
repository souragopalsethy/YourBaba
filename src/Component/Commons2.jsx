import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
function Commons2(props) {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 ">
                  <img src={props.imgsrc}  className="animated commons-img"/>
                </div>
                <div className=" text-center col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                  <h4 className="text-primary">Design and Solutioning</h4>
                  <h5 className="my-3 text-black-50">We understand that there is no substitute for time-tested knowledge. Our Consultants leverage their own experience of working inside companies to create practical and implementable solutions to issues.</h5>
                  <h4 className="text-primary" >Technology</h4>
                  <h5 className="my-3 text-black-50">We combine our experience with design, with technology as an enabler, to create secure, scalable, and simple-to-use talent management solutions for organizations.</h5>
                  <h4 className="text-primary">Program Management</h4>
                  <h5 className="my-3 text-black-50">Our dynamic, in-house team focuses on building tech and content through continuous research and client engagement. Seamless support through and post-project completion.</h5>
    
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

       </>
  );
}

export default Commons2;
