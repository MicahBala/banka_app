import uuidv1 from 'uuid/v1';
import transactionDb from '../db/transaction.db';

class TransactionsController {
  // Credit account
  creditAccount(req, res) {
    if (!req.body.amount) {
      return res.status(404).json({
        status: 404,
        error: {
          message: 'amount required',
        },
      });
    }

    const transactionCredit = {
      transId: uuidv1(),
      acctNum: req.params.acctNum,
      amt: parseFloat(req.body.amount),
      cashier: uuidv1(),
      transType: 'credit',
      accountBalance: parseFloat(0) + parseFloat(req.body.amount),
    };

    transactionDb.push(transactionCredit);

    const transactionValue = Object.values(transactionCredit);

    return res.status(200).json({
      status: 200,
      data: {
        transactionId: transactionValue[0],
        accountNumber: transactionValue[1],
        amount: transactionValue[2],
        cashier: transactionValue[3],
        transactionType: transactionValue[4],
        accountBalance: transactionValue[5],
      },
    });
  }

  // Debit account
  debitAccount(req, res) {
    if (!req.body.amount) {
      return res.status(404).json({
        status: 404,
        error: {
          message: 'amount required',
        },
      });
    }

    const prevTransaction = transactionDb.find(transaction => transaction);

    if (!prevTransaction) {
      return res.status(404).json({
        status: 404,
        error: {
          message: 'you must credit account',
        },
      });
    }

    const transactionValue = Object.values(prevTransaction);

    if (transactionValue[5] < parseFloat(req.body.amount)) {
      return res.status(404).json({
        status: 404,
        error: {
          message: 'Insufficient funds',
        },
      });
    }

    const transactionDebit = {
      transId: transactionValue[0],
      acctNum: transactionValue[1],
      amt: parseFloat(req.body.amount),
      cashier: transactionValue[3],
      transType: 'debit',
      accountBalance: transactionValue[5] - parseFloat(req.body.amount),
    };

    transactionDb.push(transactionDebit);

    const debitValue = Object.values(transactionDebit);

    return res.status(200).json({
      status: 200,
      data: {
        transactionId: debitValue[0],
        accountNumber: debitValue[1],
        amount: debitValue[2],
        cashier: debitValue[3],
        transactionType: debitValue[4],
        accountBalance: debitValue[5],
      },
    });
  }
}

const transactionsController = new TransactionsController();

export default transactionsController;
