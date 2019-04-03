import express from "express";
import usersController from "../controllers/users.controller";

const router = express.Router();

// Signup new user
router.post("/api/v1/auth/signup", usersController.signupUsers);

// Signin new user
router.post("/api/v1/auth/signin", usersController.signinUser);

export default router;
