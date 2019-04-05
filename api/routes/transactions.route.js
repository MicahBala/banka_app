import express from "express";
import transactionsController from "../controllers/transactions.controller";

const router = express.Router();

// Update user bank account status
router.post(
  "/api/v1/transactions/:acctNum",
  transactionsController.creditAccount
);

export default router;
