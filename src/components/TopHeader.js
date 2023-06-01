// import Mobile from "./Mobile";
// import { ImMenu } from "react-icons/im";
// import { MdClose } from "react-icons/md";
import "../styles/TopHeader.css";
// import React, { useContext } from "react";
// import { AuthContext } from "../Context/Context";
import flag from "../images/9.jpg";




function TopHeader() {
  // const { showSide, toggleSide } = useContext(AuthContext);

  return (
    <div className="logo-container">
      <a href="/">
        <img className="logo" src={flag}/>
      </a>

      <div className="breadcrumbs-container">
        <div className="breadcrumbs" >
         
          <a className="leadership" href="#">Leadership</a>&nbsp;<i className="chevron-right"></i>
        </div>

        <div class="page-indicator-mobile">
          <h3 className="bio">Biographies</h3>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
