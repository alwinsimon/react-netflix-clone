import React from "react";

import "./NavBar.css"

import { LOGO } from "../../constants/constants";
import { NAVBAR_AVATAR } from "../../constants/constants";


function NavBar() {

    return(
        
        <div className="navbar">

            <img className="logo" src={LOGO} alt="Logo" />

            <img className="avatar" src={NAVBAR_AVATAR} alt="Avatar" />

        </div>

    )

}

export default NavBar;
