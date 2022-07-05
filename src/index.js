import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";



import Restaurants from "./pages/Food/Food.jsx";
import Trips from "./pages/Trips/Trips.jsx";
import Weather from "./pages/Weather/Weather";
import Travel from "./pages/Travel/Travel";
import Events from "./pages/Events/Events";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
  <React.StrictMode>
  <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/food" element={<Restaurants/>} />
      <Route path="/trips" element={<Trips/>} />
      <Route path="/events" element={<Events />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/travel" element={<Travel/>} />
    </Routes>
  </React.StrictMode>
  </Router>
);

