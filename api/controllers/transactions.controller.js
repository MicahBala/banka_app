import transactionDb from "../db/transaction.db";
import uuidv1 from "uuid/v1";

class TransactionsController {
  // Credit account
  creditAccount(req, res) {
    if (!req.body.amount) {
      return res.status(404).json({
        status: 404,
        error: {
          message: "amount required"
        }
      });
    }

    let transaction = {
      transId: uuidv1(),
      acctNum: req.params.acctNum,
      amt: parseInt(req.body.amount),
      cashier: uuidv1(),
      transType: "credit",
      accountBalance: parseInt(0)
    };

    transactionDb.push(transaction);

    const transactionValue = Object.values(transaction);

    return res.status(200).json({
      status: 200,
      data: {
        transactionId: transactionValue[0],
        accountNumber: transactionValue[1],
        amount: transactionValue[2],
        cashier: transactionValue[3],
        transactionType: transactionValue[4],
        accountBalance: transactionValue[5] + transactionValue[2]
      }
    });
  }
  // Debit account
}

const transactionsController = new TransactionsController();

export default transactionsController;
