import express from "express";
import { createRecruteur, getAllRecruteur, getRecruteur, updateRecruteur, deleteRecruteur } from "./../controlers/recruteur.js";
import { authenticateToken } from "./../middlewares/jsonwebtoken.js";
import { verifEmail } from "../middlewares/verifEmail.js";

const router = express.Router();

router.post('/', verifEmail, createRecruteur);
router.get('/', authenticateToken(['admin']), getAllRecruteur);
router.get('/:search', getRecruteur);
router.put('/:id', authenticateToken(['recruteur']), updateRecruteur);
router.delete('/:id', authenticateToken(['recruteur', 'admin']), deleteRecruteur);

export default router;