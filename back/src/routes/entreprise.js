import express from "express";
import { createEntreprise, getAllEntreprise, searchEntreprise, updateEntreprise, deleteEntreprise } from './../controlers/entreprise.js';

const router = express.Router();

router.post('/', createEntreprise);
router.get('/', getAllEntreprise);
router.get('/:search', searchEntreprise);
router.put('/:id', updateEntreprise);
router.delete('/:id', deleteEntreprise);

export default router;