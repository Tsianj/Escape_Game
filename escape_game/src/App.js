import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/Navbar";
import Connexion from './Pages/Connexion';
import Reservation from './Pages/Reservation';
import Contact from './Pages/Contact';
import Galerie from './Pages/Galerie';
import MiniJeux from './Pages/MiniJeux';
import HomePage from "./Pages/HomePage";
import AuthContext from './Components/AuthContext';
import Auth from './Services/Auth';
import EscapeDetail from "./Pages/EscapeDetail";

Auth.setup();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(Auth.isAuthenticated());
  const [user, setUser] = useState(JSON.parse(Auth.getUser()));

  return (
    <div className="App">
      <AuthContext.Provider
        value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/connexion'} element={<Connexion />} />
          <Route path={'/escapesdetails/:id'} element={<EscapeDetail />} />         
          <Route path={'/galerie'} element={<Galerie />} /> 
          <Route path={'/minijeux'} element={<MiniJeux />} /> 
          <Route path={'/reservation'} element={<Reservation />} />
          <Route path={'/contact'} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
