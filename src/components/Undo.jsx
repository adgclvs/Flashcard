import React from "react";
import { NavLink } from "react-router-dom";

const Undo = () => {
  return (
    <div className="undo">
      <NavLink to="/" activeClassName="nav-active">
        <img src="/logo192.png" alt="" id="undo" />
      </NavLink>
    </div>
  );
};

export default Undo;
