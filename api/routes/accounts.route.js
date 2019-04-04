import express from 'express';
import accountsController from '../controllers/accounts.controller';

const router = express.Router();

// Create user bank account
router.post('/api/v1/accounts', accountsController.createAccount);

// Update user bank account status
router.patch('/api/v1/accounts/:acctNum', accountsController.accountStatus);

export default router;
