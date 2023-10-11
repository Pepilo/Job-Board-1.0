import express from "express";
import { createCandidat, getCandidat, updateCandidat, deleteCandidat } from "./../controlers/candidat.js";

const router = express.Router();

router.post('/', createCandidat);
router.get('/', getCandidat);
router.put('/:id', updateCandidat);
router.delete('/:id', deleteCandidat);

export default router;