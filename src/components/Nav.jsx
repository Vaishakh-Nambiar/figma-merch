import React from "react";
import Buttons from "./Buttons";

import { Link } from "react-router-dom";

// import smthing from ""
function Nav() {
  return (
    <nav className="flex justify-between items-center w-full  p-6 font-au  text-black ">
      <div className=" flex">
        <Link to="/" className="text-black">
          <Buttons value="Shop" />
        </Link>
        <Link to="/about" className="text-black">
          <Buttons value="About" />
        </Link>
      </div>
      <h1 className="title ">
        <img src="../public/resources/misc/logo-full.static.svg" />
        {/* <img src="src/assets/logo-full.static.svg" /> */}
      </h1>
      <div className=" flex">
        <Link to="/cart" className="text-black">
          <Buttons value="Cart" />
        </Link>
        <Buttons value="Log in" />
      </div>
    </nav>
  );
}

export default Nav;
