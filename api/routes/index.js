import express from "express";
import authRoute from "./auth.route";
import accountsRoute from "./accounts.route";
import transactionsRoute from "./transactions.route";

const router = express.Router();

router.use(authRoute);
router.use(accountsRoute);
router.use(transactionsRoute);

router.get("/", (req, res) => res.send("Welcome to the BANKA!!!"));

export default router;
