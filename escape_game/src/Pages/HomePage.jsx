import React, { useEffect, useState } from "react";
import CardEscape from "../Components/CardsEscape";
import CardDom from "../Components/CardsDom";
import Escapes from "../Services/escapesService";
import "../HomePage.css";

const HomePage = () => {
  const [escp, setEscp] = useState([]);

  const fetchEscapesCard = async () => {
    try {
      const response = await Escapes.fetchEscapesCard();
      setEscp(response.data.results);
      console.log(response.data.results)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEscapesCard();
  }, []);

  return (
    <body>
      <div className="homepage">
        <h1>L'univers des escapes games</h1>
        <div className="story">
          <h3>Notre histoire </h3>
          <p>
            "Énigmes Évadées" a été créée avec une passion commune pour les
            défis intellectuels et les aventures captivantes. Notre équipe
            dévouée travaille sans relâche pour concevoir des Escape Games
            originaux, stimulants et divertissants qui transportent les
            participants dans des univers extraordinaires
          </p>
        </div>
        <div className="titre">
          <h3>Escape Game</h3>
        </div>{" "}



        <div className="card-container"></div>
        <div className="escape-container">
          {escp.map((e) => {
            return <CardEscape key={escp.id_escape} escp={e} />;
          })}
        </div>




        <div className="titre">
          <h3 className="lieux">Sur place</h3>
        </div>
        <CardDom />
      </div>{" "}
    </body>
  );
};

export default HomePage;
