import React from "react";
import Cards from "../Components/Cards";

const HomePage = () => {
  return (
    <div>
      <h1>L’univers des escapes games</h1>
      <h3>À Propos de Nous </h3>
      <p>
        "Énigmes Évadées" a été créée avec une passion commune pour les défis
        intellectuels et les aventures captivantes. Notre équipe dévouée
        travaille sans relâche pour concevoir des Escape Games originaux,
        stimulants et divertissants qui transportent les participants dans des
        univers extraordinaires
      </p>
      <div>
        <hr className="traitHP" />
        <p>Escape Game</p>
        <hr className="traitHP" />
      </div>
      <p className="lieux">Sur place</p>
      <Cards />
    </div>
  );
};

export default HomePage;