import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import NavBar from "./Components/Navbar";
import Connexion from './Pages/Connexion';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/connexion'} element={<Connexion />} />
          <Route path={'/reservation'} element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
