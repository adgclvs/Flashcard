import React, { useEffect, useState } from "react";

const Form = () => {
  const [card, setCard] = useState({
    title: "",
    description: "",
  });

  const addStorage = () => {
    const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
    storedCards.push(card);
    localStorage.setItem("cards", JSON.stringify(storedCards));
    setCard({
      title: "",
      description: "",
    });
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.cards.split(",");
    let newData = storedData.filter((id) => id != card.id);
    window.localStorage.cards = newData;
  };

  const clearStorage = () => {
    window.localStorage.clear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard({
      ...card,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const titleValue = e.target.title.value;
    const descriptionValue = e.target.description.value;

    if (!titleValue || !descriptionValue) {
      alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
    } else {
      addStorage();
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <label htmlFor="title"></label>
          <input
            placeholder="Word..."
            type="text"
            id="title"
            name="title"
            value={card.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-description">
          <label htmlFor="description"></label>
          <textarea
            placeholder="Write the description and translation ..."
            type="text"
            id="description"
            name="description"
            value={card.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create FlashCard</button>
      </form>
    </div>
  );
};

export default Form;
