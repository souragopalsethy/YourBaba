import React,{useState} from "react";
import Commons from "./Commons"
import about from "../images/about.svg"
import Bganim from "./BgAnim"
import Ourteam from "./Ourteam"
function About() {
  
  return (
    <>
<Commons
  name="Contact details: 8093135327"
  visit="/service"
  btnName="Explore Services"
  imgsrc={about}
/>
<Ourteam/>
    <Bganim type="cobweb"/>
    </>
  );
}

export default About;
