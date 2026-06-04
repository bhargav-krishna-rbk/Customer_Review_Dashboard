export const TotalAmount = (customerData) => {
  return customerData.reduce((sum, customer) => {
    const customerTotal = customer.transactions.reduce((txnSum, txn) => {
      return txnSum + txn.amount;
    }, 0);
    return sum + customerTotal;
  }, 0);
};