import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import home from "../images/home.svg"
import laptop from "../images/laptop.svg"
import Commons from "./Commons"
import Commons2 from "./Commons2"
import Achivement from "./Achivement"
import Bganim from "./BgAnim"
function Home() {

  return (
    <>
  <Commons
  name=""
  visit="/about"
  btnName="Know More"
  imgsrc={home}
/>

<Commons2
  name=""
  visit="/about"
  btnName="Know More"
  imgsrc={laptop}
/>
<Bganim type="cobweb"/>
<Achivement/>
    </>
  );
}

export default Home;
