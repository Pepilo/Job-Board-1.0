import express from "express";
import { createCandidature, getAllCandidature, deleteCanditature } from "./../controlers/candidature.js";
import { authenticateToken } from "./../middlewares/jsonwebtoken.js";

const router = express.Router();

router.post('/', authenticateToken(['candidat']), createCandidature);
router.get('/', authenticateToken(['recruteur', 'admin']), getAllCandidature);
router.delete('/:id', deleteCanditature);

export default router;