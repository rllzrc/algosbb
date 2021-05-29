// ** AE: Arrays Reps Challenge  
// ** --> { Non-Constructible Change !!! }

// T A SK !!!

// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the min sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily unique (ie you can have multiple coins of the same value).

// For example, if you're given coins = [1,2,5] the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change you can't create is 1.

// * ~ main squeeze:
// minimum amount of change = 1 (if not given a 1 cent coin)
// loop through all positive integers and loop through unitl N is some interger we can't create a change for (brute force)
// very complicated to implement, having to keep track of elements and numbers they add up to etc.
// optimized: sort array => have a change variable = 0 (tells us how much change we can create) 
// loop through coins in ascending order and see how much change we can make with those coins
// add values together from previously as you continue and update change

// * change is greater than the amount of previous coins + 1 ~~
// v > c + 1 then we cannot make c + 1 change, return it
// * coin is less than or equal to change + 1 we can make change previously and in between ~~
// v <= c + 1, then yes we can make c + v change

// * --- Roadmap --- *
// input: array of integers (positive, non zero integers, not necessarily unique)
// output: a number (minimum amount of change)
// constraints: optimize
// edge cases: sort array in place (ask if allowed to sort in place) if not, O(N) space instead

// * time complexity: O(nlogn) = due to sort + one loop (merge sort or quick sort)
// * space complexity: O(1)
const nonConstructibleChange = coins => {
  coins.sort((a, b) => a - b);
  currentChange = 0;

  for(const coin of coins) {
    // if coin is greater than cc + 1 then we know we can't create whatever the current change is + 1
    if(coin > currentChange + 1) {
      return currentChange + 1;
    }
    // else add value of current coin to current change
    // to note that we can create up to this value of current change as we continue to loop
    currentChange += coin;
  }
  // if we never hit the if clause, we return the next value we cannot create + 1
  return currentChange + 1;
}