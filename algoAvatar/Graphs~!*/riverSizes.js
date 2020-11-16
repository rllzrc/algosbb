// ** AE: Graphs Daily Reps Challenge
// ** --> { river sizes !!! }

// T A S K !!

// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or verticaly adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.

// Not that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

// Write a function that returns an array of the size of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

// * Input: 2 dimensional array (matrix)
// Output: a boolean value
// Constraints: optimize
// Edge Cases: make sure you are visiting N elements, if you're back on the starting element before visiting the N elements then that's a CYCLE >> if you end up visiting all N elements but you're not at the starting point = MULTIPLE CYCLES + negative numbers situation

// * Time: O(N) - linear
// * Space: O(1) - constant

// * first attempt: