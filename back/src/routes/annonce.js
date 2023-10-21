import express from "express";
import { createAnnonce, getAllAnnonce, getAnnonceById, getAnnonceByIdRecruteur, updateAnnonce, deleteAnnonce } from "./../controlers/annonce.js";
import { authenticateToken } from "./../middlewares/jsonwebtoken.js";

const router = express.Router();

router.post('/', authenticateToken(['recruteur']), createAnnonce);
router.get('/', getAllAnnonce);
router.get('/:id',getAnnonceById);
router.get('/:id/recruteur', getAnnonceByIdRecruteur);
router.put('/:id', authenticateToken(['recruteur', 'admin']), updateAnnonce);
router.delete('/:id', authenticateToken(['recruteur', 'admin']), deleteAnnonce);

export default router;