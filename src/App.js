import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import AppNavbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Alerts from "./components/layout/Alerts";
import Movie from "./components/movies/Movie";
import NotFound from "./components/pages/NotFound";

import MovieState from "./context/movie/MovieState";
import AlertState from "./context/alert/AlertState";
import { Container } from "react-bootstrap";

function App() {
  return (
    <MovieState>
      <AlertState>
        <Router>
          <AppNavbar />
          <Container>
            <div className="p-3">
              <Alerts />
              <Routes>
                <Route
                  exact
                  path="/"
                  Component={Home}
                />
                <Route
                  exact
                  path="/about"
                  Component={About}
                />
                <Route
                  exact
                  path="/movie/:id"
                  Component={Movie}
                />
                <Route
                  path="*"
                  Component={NotFound}
                />
              </Routes>
            </div>
          </Container>
        </Router>
      </AlertState>
    </MovieState>
  );
}

export default App;
