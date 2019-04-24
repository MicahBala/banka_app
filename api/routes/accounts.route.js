import express from 'express';
import accountsController from '../controllers/accounts.controller';

const router = express.Router();

// Create user bank account
router.post('/api/v1/accounts', accountsController.createAccount);

// Update user bank account status
router.patch(
  '/api/v1/accounts/:account_number',
  accountsController.accountStatus
);

// Delete user bank account
router.delete(
  '/api/v1/accounts/:account_number',
  accountsController.deleteAccount
);

// Get specific user bank account
router.get('/api/v1/accounts/:account_number', accountsController.getAccounts);

// Get a list of all bank accounts
router.get('/api/v1/accounts', accountsController.getAllAccounts);

export default router;
