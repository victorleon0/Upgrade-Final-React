import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Auth from "../src/pages/Auth/Auth"

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
import AddRestaurant from "./pages/Admin/AddRestaurant.jsx";
import UserEdit from "./pages/User/UserEdit";
import Logout from "./pages/Logout/Logout";
import EditExperience from "./pages/Admin/EditExperience";
import ManageRestaurants from "./pages/Admin/ManageRestaurants";
import EditRestaurant from "./pages/Admin/EditRestaurant";
import UserBooks from "./pages/User/UserBooks";

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
          <Route path="/users/books" element={<UserBooks />} />
          <Route path="/users/edit" element={<UserEdit />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/manageexperiences" element={<ManageExperiences />} />
          <Route path="/admin/managerestaurants" element={<ManageRestaurants />} />
          <Route path="/admin/addexperiences" element={<AddExperiences />} />
          <Route path="/admin/addrestaurant" element={<AddRestaurant />} />
          <Route path="/experience/:id" element={<EditExperience />} />
          <Route path="/restaurant/:id" element={<EditRestaurant />} />
          <Route path="/user" element={<Auth component={<User />} />} />
          <Route path="/user/edit" element={<UserEdit />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>
);
