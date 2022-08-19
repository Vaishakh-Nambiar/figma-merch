import React from "react";
import Buttons from "./Buttons";
// import smthing from ""
function Nav() {
  return (
    <nav className="flex justify-between items-center w-full  p-6 font-au  text-black ">
      <div className=" flex">
        <Buttons value="Shop" />
        <Buttons value="About" />
      </div>
      <h1 className="title ">
        <img src="src/resources/misc/logo-full.static.svg" />
      </h1>
      <div className=" flex">
        <Buttons value="Cart" />
        <Buttons value="Log in" />
      </div>
    </nav>
  );
}

export default Nav;
