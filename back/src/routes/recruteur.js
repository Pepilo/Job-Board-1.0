import express from "express";
import { createRecruteur, getRecruteur, updateRecruteur, deleteRecruteur } from "./../controlers/recruteur.js";

const router = express.Router();

router.post('/', createRecruteur);
router.get('/', getRecruteur);
router.put('/:id', updateRecruteur);
router.delete('/:id', deleteRecruteur);


export default router;