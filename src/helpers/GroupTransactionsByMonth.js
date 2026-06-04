export const groupTransactionsByMonth = (transactions) => {
  return transactions.reduce((grouped, transaction) => {
    const date = new Date(transaction.date);
    const monthKey = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!grouped[monthKey]) {
      grouped[monthKey] = [];
    }
    
    grouped[monthKey].push(transaction);
    return grouped;
  }, {});
};