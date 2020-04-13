// * Last Friday Night!

// TASK!
// According to the song, Katy Perry "maxed our credit cards".
// Define a function, lastFridayNight, takes an array of transactions.
// lastFridayNight should return the total amount she spent last Friday night.

// * first pass using map and reduce!

const sumTransactions = arr => {
  // declare a variable to store total amount
  const sum = arr.map(el => el.amount).reduce((a,b) => a + b, 0);
  return sum;
}


let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

// * test case!
console.log(sumTransactions(transactions)); // => 10512