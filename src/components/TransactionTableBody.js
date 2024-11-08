import { useState } from "react";
import TransactionRow from "./TransactionRow";

const TransactionTableBody = ({ transactions, updateTransaction, deleteTransaction }) => {
  const transactionsList = transactions.map(transaction => (
    <TransactionRow
      key={transaction.id}
      transaction={transaction}
      deleteTransaction={deleteTransaction}
      updateTransaction={updateTransaction}
    />
  ));

  return <tbody>{transactionsList}</tbody>;
};
export default TransactionTableBody;
