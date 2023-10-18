import express from "express";
import { loginCandidat, loginRecruteur, loginAdmin } from "./../controlers/login.js";

const router = express.Router();

router.post('/candidat', loginCandidat);
router.post('/recruteur', loginRecruteur);
router.post('/admin', loginAdmin);

export default router;