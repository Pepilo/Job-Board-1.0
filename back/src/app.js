import express from "express";
import { entrepriseRoutes, recruteurRoutes, candidatRoutes, annonceRoutes, candidatureRoutes, loginRoutes, AdminRoutes } from "./routes/index.js";
import cors from "cors";

export const app = express();

app.use(express.json());

app.use(cors());

app.use('/entreprise', entrepriseRoutes);
app.use('/recruteur', recruteurRoutes);
app.use('/candidat', candidatRoutes);
app.use('/annonce', annonceRoutes);
app.use('/candidature', candidatureRoutes);
app.use('/login', loginRoutes);
app.use('/admin', AdminRoutes);