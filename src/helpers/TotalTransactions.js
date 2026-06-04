export const TotalTransactions = (customerData) => {
  return customerData.reduce((sum, customer) => {
    return sum + customer.transactions.length;
  }, 0);
};