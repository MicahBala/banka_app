import pool from './db_connect';

class AccountsServices {
  // Get single user account
  async getUserAccount(userAccountNumber) {
    let accountQueryResult;

    const selectQuery =
      'SELECT banka_accounts.account_number, banka_accounts.type_of_account, banka_accounts.account_status, banka_accounts.account_balance, banka_accounts.created_on, banka_users.email FROM banka_accounts JOIN banka_users ON banka_accounts.owner = banka_users.id WHERE banka_accounts.account_number = $1';

    try {
      accountQueryResult = await pool.query(selectQuery, [userAccountNumber]);
    } catch (error) {
      return error;
    }

    if (accountQueryResult.rows[0] === undefined) {
      return undefined;
    }

    return accountQueryResult;
  }

  // Get all accounts
  async getAllAccount() {
    let allAccountQueryResult;

    const selectQuery = 'SELECT * FROM banka_accounts';

    try {
      allAccountQueryResult = await pool.query(selectQuery);
    } catch (error) {
      return error;
    }

    if (allAccountQueryResult.rows === undefined) {
      return undefined;
    }

    return allAccountQueryResult;
  }
}

const accountsServices = new AccountsServices();

export default accountsServices;
