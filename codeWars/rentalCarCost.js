// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// // Write a code that gives out the total amount for different days(d).
// * input: days, rent = 40// a number and a nunber --> add default param because every day the fee is $40
// output: a number, for the total amount of different days

const rentalCarCost = (days) => {
  // * first case if days 1, return 40, if no days passed, return please come back again as a string

  // make sure days is a number, if not it returns NaN

  days = Number(days);
  console.log('this is days param:', days);
  if (days === 0) {
    return 'please come back again!';
  } else if (days === 1) {
    return 40;
  }

  // create a variable called deals
  // if rent >= 7 days, -50 $,
  // else if rent 
  let rent = 40
  let cost = days * rent;
  
  if(days >= 7) {
    cost = days * rent - 50;
  } else if(days >= 3) {
    cost = days * rent - 20;
  }

  console.log(typeof(cost));
  return cost;

}

console.log(rentalCarCost(1));// 40);
console.log(rentalCarCost(2)); // 80);

console.log(rentalCarCost(3));//
console.log(rentalCarCost(4)); // 
