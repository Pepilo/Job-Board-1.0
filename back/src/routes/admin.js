import express from "express";
import { CreateAdmin, getAllAdmin, getAdminById, deleteAdmin } from "./../controlers/admin.js";
import { verifEmail } from "../middlewares/verifEmail.js";

const router = express.Router();

router.post('/', verifEmail, CreateAdmin);
router.get('/', getAllAdmin);
router.get('/:id', getAdminById);
router.delete('/:id', deleteAdmin);

export default router;