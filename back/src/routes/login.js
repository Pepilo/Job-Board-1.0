import express from "express";
import { login } from "./../controlers/login.js";

const router = express.Router();

router.post('/', login);

export default router;