import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./composants/Header.jsx";
import { Footer } from "./composants/Footer.jsx";
import { Annonce } from "./composants/Annonce.jsx";
import { Middle } from "./composants/Middle.jsx";
import { InscriptionRecruteur } from "./composants/Inscription_recruteur.jsx";
import { InscriptionCandidat } from "./composants/Inscription_candidat.jsx";
import { ListeMesAnnonces } from "./composants/ListeMesAnnonces.jsx";
import { CreerAnnonce } from "./composants/CreerAnnonce.jsx";
import {Postulation} from "./composants/Postulation.jsx";
import { ListAllUtilisateurs } from "./composants/ListAllUtilisateurs.jsx";
import { Annonce_List } from "./composants/Annonce_liste.jsx";

import { Acceuil } from "./pages/Acceuil.jsx";
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
        <Route path="/inscription_candidat" element={<InscriptionCandidat/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/utilisateur/:id" element={<Utilisateur/>} />
        <Route path="/creer_annonce" element={<CreerAnnonce/>} />
        <Route path="/listeMesAnnonces" element={<ListeMesAnnonces/>} />
        <Route path = "/postulation/:id" element = {<Postulation/>} />
        <Route path="/listAllUtilisateurs" element={<ListAllUtilisateurs />} />
        <Route path="/listAnnonce" element={<Annonce_List />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;