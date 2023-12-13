import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./Components/Navbar";
import Reservation from "./Pages/Reservation";
import HomePage from "./Pages/HomePage";
import AuthContext from "./Components/AuthContext";
import Connexion from "./Pages/Connexion";
import Auth from "./Services/Auth";
import EscapeDetail from "./Pages/EscapeDetail";
import Profil from "./Pages/Profil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth0 = new Auth();
Auth0.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Auth0.isAuthenticated() 
  );
  const [user, setUser] = useState(Auth0.getUser());

  return (
    <div className="App">
      <AuthContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/connexion"} element={<Connexion />} />
            <Route path={"/reservation"} element={<Reservation />} />
            <Route path={"/escapesdetails/:id"} element={<EscapeDetail />} />
            <Route path={"/profil"} element={<Profil />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
