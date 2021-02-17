import React, { useState } from "react";
import a1 from "../images/a1.png"
import a2 from "../images/a2.png"
import a3 from "../images/a3.png"
function Achivement(props) {

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"></h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row gy-4">

                            <div className="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={a1} className=" achivement_card" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-center text-primary">In-house Global Delivery Centre & Tech teams</h4>
                                </div>
                            </div>
                            <div className="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={a2} className=" achivement_card" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-center  text-primary">Deep global experience</h4>
                                </div>
                            </div>
                            <div className="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={a3} className=" achivement_card  " alt="..." />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-center  text-primary">ISO 27001 Certified</h4>
                                </div>
                            </div>
                            <div className="card col-md-3 col-10 mx-auto " >
                                <div className="text-center">
                                    <img src={a1} className=" achivement_card" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h4 className="text-center  text-primary">GDPR Compliant</h4>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Achivement;
