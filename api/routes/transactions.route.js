import express from 'express';
import transactionsController from '../controllers/transactions.controller';

const router = express.Router();

// Credit user bank account status
router.post(
  '/api/v1/transactions/:acctNum/credit',
  transactionsController.creditAccount,
);

// Debit user bank account status
router.post(
  '/api/v1/transactions/:acctNum/debit',
  transactionsController.debitAccount,
);

export default router;
