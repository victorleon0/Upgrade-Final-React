import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
//import registerServiceWorker from './registerServiceWorker'; //Se guardan los cambios aunque el User tenga mala conexión

import Restaurants from "./pages/Food/Food.jsx";
import Trips from "./pages/Trips/Trips.jsx";
import Weather from "./pages/Weather/Weather";
import Travel from "./pages/Travel/Travel";
import Events from "./pages/Events/Events";
import Login from "./pages/Login/Login.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Register from "./pages/Register/Register.jsx";
import User from "./pages/User/User.jsx";
import ManageUsers from "./pages/Admin/ManageUsers.jsx";
import AddUser from "./pages/Admin/AddUser.jsx";
import UserEdit from "./pages/User/UserEdit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/food" element={<Restaurants />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/events" element={<Events />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/manageusers" element={<ManageUsers />} />
          <Route path="/admin/adduser" element={<AddUser />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/edit" element={<UserEdit />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Provider>
=======

  <Router>
  <React.StrictMode>
  <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/food" element={<Restaurants/>} />
      <Route path="/trips" element={<Trips/>} />
      <Route path="/events" element={<Events />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/travel" element={<Travel/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/users/register" element={<Register/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/user" element={<User/>} />
    </Routes>
  </React.StrictMode>
  </Router>
>>>>>>> user
);
//registerServiceWorker();
