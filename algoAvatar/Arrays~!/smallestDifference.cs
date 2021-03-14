// ** AE: Arrays Reps Challenge ~ C# Edition !! ~
// ** --> { Smallest Difference !!! }

// T A SK !!!

// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// * --- Roadmap --- *
// input: two non-empty arrays of integers 
// output: pair of numbers (one from each array) whose absolute difference is closest to zero in an array with the number from the first array in the first position 
// constraints: optimize 
// edge cases: if two nums equal each other, then we found the pair! Return out ~

// * main squeeze:
// sort array, have two pointers & compare them
// if === we found the pair, return out
// else update and compute the difference (distance) + generate a new pair of nums
// if x < y -> move x (left pointer increases aka index1)
// if y < x --> move y (right pointer decreases aka index2)
// current = Math.abs(firstNum - secondNum)
// update potential solution as you get a smaller difference while iterating 

// * time complexity: O(nLog(n) + mLog(m)) -> n = length of array1 m = length of array2
// * space complexity: O(1) -> no extra space stored that depends on length of inputs >> only storing a few things, differences, pairs, etc..
// More space usage if sorting in place is not available 

// write code here! ~