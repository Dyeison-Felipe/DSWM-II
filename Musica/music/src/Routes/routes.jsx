import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "../pages/Home";
import Artista from "../components/Artista";
import * as S from '../styles/styles';
import Nav from '../components/Nav'

export default function RoutesApp() {
  return (
    <Router>
      <S.DivRoutes>
        <Nav/>
        <Routes>
          <Route path="/artista" element={<Artista />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </S.DivRoutes>
    </Router>
  );
}
