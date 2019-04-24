import pool from '../services/db_connect';

class TransactionsServices {
  // Credit Transaction
  async userCreditTransaction(creditAccountNumber, creditTransactionDatails) {
    const { amount, transactionType, cashier } = creditTransactionDatails;

    let selectCreditResult;
    let updateCreditResult;
    let creditTransactionResult;
    // query the accounts table for old password
    const selectQuery = 'SELECT * FROM banka_accounts WHERE account_number=$1';

    try {
      selectCreditResult = await pool.query(selectQuery, [creditAccountNumber]);
    } catch (error) {
      return error;
    }

    if (selectCreditResult.rowCount < 1) {
      return undefined;
    }
    const oldBalance = selectCreditResult.rows[0].account_balance;

    const newBalance = oldBalance + parseFloat(amount);
    // console.log(newBalance);

    // Update accounts table
    const updateCreditQuery =
      'UPDATE banka_accounts SET account_balance = $1 WHERE account_number = $2';
    try {
      updateCreditResult = await pool.query(updateCreditQuery, [
        newBalance,
        creditAccountNumber
      ]);
    } catch (error) {
      return error;
    }

    // Update the transaction table
    const creditTransactionUpdate =
      'INSERT INTO banka_transactions (transaction_type, cashier, amount, old_balance, new_balance, user_account_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

    const creditTransactionValues = [
      transactionType,
      cashier,
      amount,
      oldBalance,
      newBalance,
      creditAccountNumber
    ];
    try {
      creditTransactionResult = await pool.query(
        creditTransactionUpdate,
        creditTransactionValues
      );
    } catch (error) {
      return error;
    }

    return creditTransactionResult;
  }

  // Debit Transaction
  async userDebitTransaction(debitAccountNumber, debitTransactionDatails) {
    const { amount, transactionType, cashier } = debitTransactionDatails;

    let selectDebitResult;
    let updateDebitResult;
    let debitTransactionResult;
    // query the accounts table for old password
    const selectQuery =
      'SELECT * FROM banka_accounts WHERE account_number = $1';

    try {
      selectDebitResult = await pool.query(selectQuery, [debitAccountNumber]);
    } catch (error) {
      return error;
    }

    if (selectDebitResult.rowCount < 1) {
      return undefined;
    }

    const oldBalance = selectDebitResult.rows[0].account_balance;
    console.log('Old Balance: ' + oldBalance);

    if (oldBalance < parseFloat(amount)) {
      return 'Insufficient Funds';
    }

    const newBalance = oldBalance - parseFloat(amount);
    console.log('New Balance: ' + newBalance);

    // Update accounts table
    const updateDebitQuery =
      'UPDATE banka_accounts SET account_balance = $1 WHERE account_number = $2';
    try {
      updateDebitResult = await pool.query(updateDebitQuery, [
        newBalance,
        debitAccountNumber
      ]);
    } catch (error) {
      return error;
    }

    // Update the transaction table
    const debitTransactionUpdate =
      'INSERT INTO banka_transactions (transaction_type, cashier, amount, old_balance, new_balance, user_account_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

    const debitTransactionValues = [
      transactionType,
      cashier,
      amount,
      oldBalance,
      newBalance,
      debitAccountNumber
    ];
    try {
      debitTransactionResult = await pool.query(
        debitTransactionUpdate,
        debitTransactionValues
      );
    } catch (error) {
      return error;
    }

    return debitTransactionResult;
  }

  async transactionHistory(transactionAccountNumber) {
    let selectTransactionHistoryResult;

    // query the accounts table
    const selectQuery =
      'SELECT * FROM banka_transactions WHERE user_account_number = $1';

    try {
      selectTransactionHistoryResult = await pool.query(selectQuery, [
        transactionAccountNumber
      ]);
    } catch (error) {
      return error;
    }
    // console.log(selectTransactionHistoryResult.rows);

    return selectTransactionHistoryResult;
  }

  // Get a single transaction
  async singleTransactionHistory(singleTransactionId) {
    let selectSingleTransactionHistoryResult;

    // query the accounts table
    const selectQuery =
      'SELECT * FROM banka_transactions WHERE transaction_id = $1';

    try {
      selectSingleTransactionHistoryResult = await pool.query(selectQuery, [
        singleTransactionId
      ]);
    } catch (error) {
      return error;
    }

    if (selectSingleTransactionHistoryResult.rowCount < 1) {
      return undefined;
    }

    return selectSingleTransactionHistoryResult;
  }
}

const transactionsServices = new TransactionsServices();

export default transactionsServices;
