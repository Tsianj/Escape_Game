import Logo from "../Assets/logo_escape.png";
import React from "react";
import LogoFcb from "../Assets/logo-facebook.svg";
import LogoInsta from "../Assets/logo-instagram.svg";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <img
          src={Logo}
          id="Logo"
          width={"100px"}
          placeholder="Logo_escape_game"
        />
        <button className="lien_nav">
          <a href="#">Connexion</a>
        </button>
        <hr />
        <button className="lien_nav">
          <a href="#">Nos Escapes</a>
        </button>
        <button className="lien_nav">
          <a href="#">Nos Escapes à domicile</a>
        </button>
        <button className="lien_nav">
          <a href="#">Mini-jeux</a>
        </button>
        <button className="lien_nav">
          <a href="#">Réservation</a>
        </button>
        <img
          className="icon"
          src={LogoFcb}
          id="logo_fcb"
          width={"40px"}
          placeholder="Logo-facebook"
        />
        <img
          className="icon"
          src={LogoInsta}
          id="logo_insta"
          width={"40px"}
          placeholder="Logo-instagram"
        />
      </div>
    </>
  );
}

export default NavBar;
