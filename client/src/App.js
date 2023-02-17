import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Login } from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Landing } from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store ={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>

        <section className="container">
          <Alert/>
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
