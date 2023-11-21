import { default as React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";
import Undo from "../components/Undo";

const Create = () => {
  return (
    <div className="create">
      <Header></Header>
      <div className="add-content">
        <Form></Form>
      </div>
      <div className="see-cards">
        <NavLink to="/yourCards" activeClassName="nav-active">
          <img src="/logo192.png" alt="" />
        </NavLink>
      </div>
      <Undo></Undo>
    </div>
  );
};

export default Create;
