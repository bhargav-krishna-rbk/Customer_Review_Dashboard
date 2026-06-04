export const calculatePoints = (amount) => {
  if (amount <= 50) return 0;

  let over100 = 0;
  let between50and100 = 0;

  
   if (amount > 100) {
          over100 = amount - 100;
          between50and100 = 50;
        } else {
          between50and100 = amount - 50;
        }
  

  return over100 * 2 + between50and100;
};

