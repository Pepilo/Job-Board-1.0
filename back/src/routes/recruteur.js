import express from "express";
import { createRecruteur, getAllRecruteur, getRecruteur, updateRecruteur, deleteRecruteur } from "./../controlers/recruteur.js";
import { authenticateToken } from "./../middlewares/jsonwebtoken.js";

const router = express.Router();

router.post('/', createRecruteur);
router.get('/', authenticateToken(['admin']), getAllRecruteur);
router.get('/:id', getRecruteur);
router.put('/:id', authenticateToken(['recruteur']), updateRecruteur);
router.delete('/:id', authenticateToken(['recruteur', 'admin']), deleteRecruteur);

export default router;