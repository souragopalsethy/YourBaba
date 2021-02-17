import React, { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "../Component/Home"
import Contact from "../Component/Contact"
import Service from "../Component/Service"
import About from "../Component/About"
import Navbar from "../Component/Navbar"


function AllRouting() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/about" component={About}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
export default AllRouting