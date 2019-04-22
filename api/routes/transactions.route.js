import express from 'express';
import transactionsController from '../controllers/transactions.controller';
import transactions from '../middlewares/transactions';

const router = express.Router();

// Credit user bank account status
router.post(
  '/api/v1/transactions/:account_number/credit',
  transactionsController.creditAccount
);

// Debit user bank account status
router.post(
  '/api/v1/transactions/:account_number/debit',
  transactionsController.debitAccount
);

export default router;
