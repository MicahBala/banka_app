import express from "express";
import authRoute from "./auth.route";
import accountsRoute from "./accounts.route";

const router = express.Router();

router.use(authRoute);
router.use(accountsRoute);

router.get("/", (req, res) => res.send("Welcome to the BANKA!!!"));

export default router;
