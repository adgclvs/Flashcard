import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

const Cards = () => {
  const [listCard, setListCard] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards"))
      ? JSON.parse(localStorage.getItem("cards"))
      : [];

    setListCard(storedCards);
  }, []);

  return (
    <div className="cards">
      <Header></Header>
      <div className="content">
        <h2>Liste des cartes :</h2>
        <ul>
          {listCard.map((card) => (
            <li key={card.id}>
              <Card title={card.title} description={card.description}></Card>
            </li>
          ))}
        </ul>
      </div>
      <NavLink to="/create" activeClassName="nav-active">
        <img src="/logo192.png" alt="" id="undo" />
      </NavLink>
    </div>
  );
};

export default Cards;
