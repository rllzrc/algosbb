// * Challenge #3 of 30 days of Code
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

const mealCost = (meal, tip, tax) => {
  let sum = 0;

  const tipCalc = meal * tip/100;
  const taxCalc = meal * tax/100;

  sum = Math.abs(meal + tipCalc + taxCalc);

  return sum;
}

// * test cases!

console.log(mealCost(12.00,20,8)); // --> 15
