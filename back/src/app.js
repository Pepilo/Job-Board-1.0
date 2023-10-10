import express from "express";
import { entrepriseRoutes } from "./routes/index.js";

export const app = express();

app.use(express.json());

app.use('/entreprise', entrepriseRoutes);