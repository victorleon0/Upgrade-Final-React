import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Restaurants from "./pages/Food/Food.jsx";
import Trips from "./pages/Trips/Trips.jsx";
import Weather from "./pages/Weather/Weather";
import ContactPage from "./pages/Contact/Contact";
import Login from "./pages/Login/Login.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Register from "./pages/Register/Register.jsx";
import User from "./pages/User/User.jsx";
import ManageExperiences from "./pages/Admin/ManageExperiences.jsx";
import AddExperiences from "./pages/Admin/AddExperience.jsx";
import UserEdit from "./pages/User/UserEdit";
import Logout from "./pages/Logout/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/food" element={<Restaurants />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/manageexperiences" element={<ManageExperiences />} />
          <Route path="/admin/addexperiences" element={<AddExperiences />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/edit" element={<UserEdit />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>
);
