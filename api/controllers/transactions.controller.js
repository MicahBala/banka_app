import Joi from 'joi';
import transactionsServices from '../services/transaction.services';

class TransactionsController {
  // Credit account
  async creditAccount(req, res) {
    const schema = {
      transactionType: Joi.string().required(),
      cashier: Joi.number().required(),
      amount: Joi.number().required()
    };

    const validateCreditTransaction = Joi.validate(req.body, schema);

    if (validateCreditTransaction.error) {
      res.status(404).send(validateCreditTransaction.error.message);
      return;
    }

    // Back from services file
    const creditResult = await transactionsServices.userCreditTransaction(
      parseFloat(req.params.account_number),
      req.body
    );

    if (creditResult === undefined) {
      return res.status(404).json({
        status: 404,
        data: {
          message: 'Account doesnt exist'
        }
      });
    }

    if (creditResult.rowCount > 0) {
      return res.status(200).json({
        status: 200,
        data: {
          message: 'Account Credited Sucessfully',
          user: creditResult.rows[0]
        }
      });
    }
  }
  // Debit account
  async debitAccount(req, res) {
    const schema = {
      transactionType: Joi.string().required(),
      cashier: Joi.number().required(),
      amount: Joi.number().required()
    };

    const validateDebitTransaction = Joi.validate(req.body, schema);

    if (validateDebitTransaction.error) {
      res.status(404).send(validateDebitTransaction.error.message);
      return;
    }

    // Back from services file
    const debitResult = await transactionsServices.userDebitTransaction(
      req.params.account_number,
      req.body
    );

    if (debitResult === 'Insufficient Funds') {
      return res.status(406).json({
        status: 404,
        data: {
          message: 'Insufficient Funds'
        }
      });
    }

    if (debitResult === undefined) {
      return res.status(404).json({
        status: 404,
        data: {
          message: 'Account doesnt exist'
        }
      });
    }

    if (debitResult.rowCount > 0) {
      return res.status(200).json({
        status: 404,
        data: {
          message: 'Account Debited Sucessfullyl',
          user: debitResult.rows[0]
        }
      });
    }
  }

  // Get account transaction history
  async getAccountTransactions(req, res) {
    // Back from services file
    const transactionResult = await transactionsServices.transactionHistory(
      req.params.account_number
    );

    // TODO: Use rest to destructure the transactions result
    // Remove the cashire field before returning other fields

    res.status(200).json({
      status: 200,
      data: {
        message: transactionResult.rows
      }
    });
  }

  // Get account transaction history
  async getSingleTransaction(req, res) {
    // Back from services file
    const singleTransactionResult = await transactionsServices.singleTransactionHistory(
      req.params.transaction_id
    );

    if (singleTransactionResult === undefined) {
      return res.status(404).json({
        status: 404,
        data: {
          message: 'transaction doesnt exist'
        }
      });
    }

    if (singleTransactionResult.rowCount > 0) {
      return res.status(200).json({
        status: 200,
        data: {
          message: singleTransactionResult.rows
        }
      });
    }
  }
}

const transactionsController = new TransactionsController();

export default transactionsController;
