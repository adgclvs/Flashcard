import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <body>
        <ul>
          <li>
            <h3>Create FlashCards</h3>
            <NavLink to="/create" activeClassName="nav-active">
              <img src="/logo192.png" alt="" />
            </NavLink>
          </li>
          <li>
            <h3>Train with FlashCards</h3>
            <NavLink to="/train" activeClassName="nav-active">
              <img src="/logo192.png" alt="" />
            </NavLink>
          </li>
        </ul>
      </body>
    </div>
  );
};

export default Home;
