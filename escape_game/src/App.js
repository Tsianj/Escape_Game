import React from 'react';
import {BrowserRouter, Route, Routes} from'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
