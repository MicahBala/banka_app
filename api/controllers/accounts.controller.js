import pool from '../services/db_connect';
import Joi from 'joi';
import accountsServices from '../services/accounts.services';

class AccountsController {
  // Create bank account
  createAccount(req, res) {
    const schema = {
      type: Joi.string().required(),
      owner: Joi.number().required()
    };

    // Validting body request
    const account = Joi.validate(req.body, schema);

    if (account.error) {
      res.status(406).send(account.error.message);
      return;
    }

    const { type, owner } = req.body;
    const account_number = Math.floor(1000000000 + Math.random() * 9000000000);
    const insertQuery =
      'INSERT INTO banka_accounts (account_number, type_of_account, account_balance, account_status, owner) VALUES($1, $2, $3, $4, $5) RETURNING *';

    const values = [account_number, type, 0.0, 'active', owner];

    return pool.query(insertQuery, values, (error, result) => {
      if (error) {
        res.status(404).json({
          status: 404,
          data: {
            message: error
          }
        });
      }

      return res.status(200).json({
        status: 201,
        data: {
          meassage: `Account created successfully`,
          accountNumber: result.rows[0].account_number,
          email: result.rows[0].email,
          type: result.rows[0].type_of_account,
          openingBalance: result.rows[0].account_balance
        }
      });
    });
  }

  // Update bank account status
  accountStatus(req, res) {
    const accountNumber = parseInt(req.params.account_number);

    const schema = {
      status: Joi.string().required()
    };

    const status = Joi.validate(req.body, schema);

    if (status.error) {
      res.status(404).send(status.error.message);
      return;
    }

    const updateQuery =
      'UPDATE banka_accounts SET account_status = $1 WHERE account_number = $2';
    const values = [req.body.status, accountNumber];

    return pool.query(updateQuery, values, (error, result) => {
      if (error) {
        res.status(404).json({
          status: 404,
          data: {
            message: error
          }
        });
      }

      res.status(200).json({
        status: 200,
        data: {
          accountNumber: accountNumber,
          status: `Account is ${req.body.status}`
        }
      });
    });
  }

  //   Delete bank account
  deleteAccount(req, res) {
    const accountNumber = parseInt(req.params.account_number);

    const deleteQuery = 'DELETE FROM banka_accounts WHERE account_number = $1';

    return pool.query(deleteQuery, [accountNumber], (error, result) => {
      if (error) {
        res.status(404).json({
          status: 404,
          data: {
            message: error
          }
        });
      }

      res.status(200).json({
        status: 200,
        data: {
          status: 'Account deleted successfully'
        }
      });
    });
  }

  // Get specific accounts
  async getAccounts(req, res) {
    // Back from services file
    const getAccountResult = await accountsServices.getUserAccount(
      req.params.account_number
    );

    if (getAccountResult === undefined) {
      return res.status(404).json({
        status: 404,
        data: {
          message: 'account doesnt exist'
        }
      });
    }

    return res.status(200).json({
      status: 200,
      data: {
        message: getAccountResult.rows[0]
      }
    });
  }
}

const accountsController = new AccountsController();

export default accountsController;
