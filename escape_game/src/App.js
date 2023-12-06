import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Connexion from './Pages/Connexion';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <div>
      <BrowserRouter>
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
