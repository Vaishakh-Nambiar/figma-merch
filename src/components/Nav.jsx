import React from "react";
import Buttons from "./Buttons";
// import smthing from ""
function Nav() {
  return (
    <nav className="flex justify-between items-center  w-full p-6 font-au bg-yellow text-black">
      <div className="btn flex">
        <Buttons value="Shop" />
        <Buttons value="About" />
      </div>
      <h1 className="title ">
        <img src="src/resources/misc/logo-full.static.svg" />
      </h1>
      <div className="btn flex">
        <Buttons value="Cart" />
        <Buttons value="Log in" />
      </div>
    </nav>
  );
}

export default Nav;
