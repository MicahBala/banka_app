import express from "express";
import usersController from "../controllers/users.controller";

const router = express.Router();

// Signup new user
router.post("/auth/signup", usersController.signupUsers);

export default router;
