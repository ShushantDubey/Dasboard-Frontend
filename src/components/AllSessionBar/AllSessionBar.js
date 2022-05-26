import React from "react";
import "../AllSessionBar/AllSessionBar.scss";

function AllSessionBar() {
  return (
    <div className="allsession__navbar">
      <div className="navbar__title">
      <p>All Session Data</p>
      </div>
      <div className="navbar__input">
        <input className="input" type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default AllSessionBar;
