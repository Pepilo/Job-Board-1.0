import express from "express";
import { createAnnonce, getAnnonce, updateAnnonce, deleteAnnonce } from "./../controlers/annonce.js";
import { authenticateToken } from "./../middlewares/jsonwebtoken.js";

const router = express.Router();

router.post('/', authenticateToken(['recruteur']), createAnnonce);
router.get('/', getAnnonce);
router.put('/:id', authenticateToken(['recruteur', 'admin']), updateAnnonce);
router.delete('/:id', authenticateToken(['recruteur', 'admin']), deleteAnnonce);

export default router;