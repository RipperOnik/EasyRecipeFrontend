import * as React from "react";
import Collapsable from "./Collapsable";
import NavBarToggler from "./NavbarToggler";
import Search from "../search/Search";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src="https://cdn-icons-png.flaticon.com/512/1830/1830839.png" alt="img" width="30" height="24"/>
          EasyRecipe
        </a>
        <NavBarToggler/>
        <Collapsable/>
        <Search/>

      </div>
    </nav>
  );
}

export default Navbar;
