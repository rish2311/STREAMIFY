import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router()

// We don't want to put the entire signup function here in this code itself. So we will put it in the controller.
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;