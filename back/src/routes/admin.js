import express from "express";
import { CreateAdmin, getAdmin, deleteAdmin } from "./../controlers/admin.js";

const router = express.Router();

router.post('/', CreateAdmin);
router.get('/', getAdmin);
router.delete('/:id', deleteAdmin);

export default router;