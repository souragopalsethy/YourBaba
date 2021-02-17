import React, { useState } from "react";
import manas from "../images/manas.jpg"
import papun from "../images/papun.jpg"
import biku from "../images/biku.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Ourteam(props) {

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Team</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-2">

                            <div class="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={papun} class=" ourteam_card" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">Java/Ui expert</h5>
                                    <div className="text-center">
                                        <a href="#" className="ml-3" ><FacebookIcon /></a>
                                        <a href="#" className="ml-3" ><TwitterIcon /></a>
                                        <a href="#" className="ml-3" ><InstagramIcon /></a>
                                        <a href="#" className="ml-3" ><LinkedInIcon /></a>
                                    </div>
                                </div>
                            </div>

                            <div class="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={biku} class=" ourteam_card" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">Java/Ui expert</h5>
                                    <div className="text-center">
                                        <a href="#" className="ml-3" ><FacebookIcon /></a>
                                        <a href="#" className="ml-3" ><TwitterIcon /></a>
                                        <a href="#" className="ml-3" ><InstagramIcon /></a>
                                        <a href="#" className="ml-3" ><LinkedInIcon /></a>
                                    </div>
                                </div>
                            </div>

                            <div class="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={manas} class=" ourteam_card" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">Mern stack</h5>
                                    <div className="text-center">
                                        <a href="#" className="ml-3" ><FacebookIcon /></a>
                                        <a href="#" className="ml-3" ><TwitterIcon /></a>
                                        <a href="#" className="ml-3" ><InstagramIcon /></a>
                                        <a href="#" className="ml-3" ><LinkedInIcon /></a>
                                    </div>
                                </div>
                            </div>

                            <div class="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={papun} class=" ourteam_card" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">Devops</h5>
                                    <div className="text-center">
                                        <a href="#" className="ml-3" ><FacebookIcon /></a>
                                        <a href="#" className="ml-3" ><TwitterIcon /></a>
                                        <a href="#" className="ml-3" ><InstagramIcon /></a>
                                        <a href="#" className="ml-3" ><LinkedInIcon /></a>
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

export default Ourteam;
