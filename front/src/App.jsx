import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./composants/Header.jsx";
import { Footer } from "./composants/Footer.jsx";

import { Acceuil } from "./pages/Acceuil.jsx";
import { Annonce } from "./composants/Annonce.jsx";
import { Middle } from "./composants/Middle.jsx";
import { InscriptionRecruteur } from "./composants/Inscription_recruteur.jsx";
import { InscriptionCandidat } from "./composants/Inscription_candidat.jsx";
import { Login } from "./pages/Login.jsx";
import { Utilisateur } from "./pages/Utilisateur.jsx";

import "./style.css";

export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Acceuil/>} />
        <Route path="/annonce/:id" element={<Annonce/>} />
        <Route path="/middle" element={<Middle/>} />
        <Route path="/inscription_recruteur" element={<InscriptionRecruteur/>} />
        <Route path="/inscription_candidat" element={<InscriptionCandidat/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/utilisateur" element={<Utilisateur/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;