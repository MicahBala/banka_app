import uuidv1 from 'uuid/v1';
import accountsDb from '../db/accounts.db';

class AccountsController {
  // Create bank account
  createAccount(req, res) {
    if (
      !req.body.firstName
      || !req.body.lastName
      || !req.body.email
      || !req.body.type
    ) {
      return res.status(404).send({
        success: false,
        message: 'firstName, lastName, email, and type fields are required',
      });
    }

    const account = {
      accountNumber: uuidv1(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      type: req.body.type,
      openingBalance: 0,
      status: 'active',
    };

    accountsDb.push(account);

    return res.status(200).send({
      success: true,
      message: 'Bank Account created successfully',
      account: accountsDb[accountsDb.length - 1],
    });
  }

  //   Update bank account status
  accountStatus(req, res) {
    const accountToUpdate = accountsDb.find(
      account => account.accountNumber === req.params.acctNum,
    );

    if (!accountToUpdate) {
      return res.status(404).send({
        success: false,
        message: 'account not found',
      });
    }

    accountToUpdate.status = req.body.status;

    return res.status(200).send({
      success: true,
      message: `user account is now ${accountToUpdate.status}`,
    });
  }
}

const accountsController = new AccountsController();

export default accountsController;
