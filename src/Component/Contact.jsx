import React, { useState } from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Contact() {

const background1="https://cdn.pixabay.com/photo/2018/01/31/06/56/map-3120436_960_720.jpg";
const background2="https://cdn.pixabay.com/photo/2019/09/22/16/20/location-4496459_960_720.png";



  return (
    <>
      <div className="contact2" style={{backgroundImage: `url(${background1})`}} id="contact">
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="name" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="email" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="phone" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="location" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              <input className="form-control" type="text" placeholder="message" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-image" style={{backgroundImage: `url(${background2})`}}>
                    <div className="detail-box p-4">
                      <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                      <p className="text-white op-7">At/po:Jajpur Kuakhia
                  <br /> Odisha,India</p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                      <p className="text-white op-7">8093135327

                  <br /> souragopal@gmail.com</p>
                      <div className="round-social light">
                        <a href="#" ><FacebookIcon/></a>
                        <a href="#" ><TwitterIcon/></a>
                        <a href="#" ><InstagramIcon/></a>
                        <a href="#" ><LinkedInIcon/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;
