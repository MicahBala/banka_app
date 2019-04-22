import express from 'express';
import transactionsController from '../controllers/transactions.controller';

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

// View account transaction history
router.get(
  '/api/v1/accounts/:account_number/transactions',
  transactionsController.getAccountTransactions
);

// View a single transaction
router.get(
  '/api/v1/transactions/:transaction_id',
  transactionsController.getSingleTransaction
);

export default router;
