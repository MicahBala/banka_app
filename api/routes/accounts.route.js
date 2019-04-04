import express from 'express';
import accountsController from '../controllers/accounts.controller';

const router = express.Router();

// Create user bank account
router.post('/api/v1/accounts', accountsController.createAccount);

export default router;
