import React from 'react';
import './App.css';
import Recife from './routes/recife';
import Olinda from './routes/olinda/olinda';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Offcanvas navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/recife">Recife</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/olinda">Olinda</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/recife" element={<Recife />} />
        <Route path="/olinda" element={<Olinda />} />
      </Routes>
    </Router>
  );
}

export default App;
