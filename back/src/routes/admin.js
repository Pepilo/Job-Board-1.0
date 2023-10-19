import express from "express";
import { CreateAdmin, getAdmin, deleteAdmin } from "./../controlers/admin.js";
import { verifEmail } from "../middlewares/verifEmail.js";

const router = express.Router();

router.post('/', verifEmail, CreateAdmin);
router.get('/', getAdmin);
router.delete('/:id', deleteAdmin);

export default router;