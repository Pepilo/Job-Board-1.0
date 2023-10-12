import express from "express";
import { createAnnonce, getAnnonce, updateAnnonce, deleteAnnonce } from "./../controlers/annonce.js";

const router = express.Router();

router.post('/', createAnnonce);
router.get('/', getAnnonce);
router.put('/:id', updateAnnonce);
router.delete('/:id', deleteAnnonce);

export default router;