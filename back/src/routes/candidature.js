import express from "express";
import { createCandidature, getAllCandidature, deleteCanditature } from "./../controlers/candidature.js";

const router = express.Router();

router.post('/', createCandidature);
router.get('/', getAllCandidature);
router.delete('/', deleteCanditature);

export default router;