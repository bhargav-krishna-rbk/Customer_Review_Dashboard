export const TotalCredits = (customerData) => {
  return customerData.reduce((customerSum, customer) => {
    return (
      customerSum +
      customer.transactions.reduce((txnSum, txn) => {
        const amount = txn.amount || 0;
        let over100 = 0;
        let between50and100 = 0;

        if (amount <= 50) {
          return txnSum;
        }

        if (amount > 100) {
          over100 = amount - 100;
          between50and100 = 50;
        } else {
          between50and100 = amount - 50;
        }

        return txnSum + over100 * 2 + between50and100;
      }, 0)
    );
  }, 0);
};
