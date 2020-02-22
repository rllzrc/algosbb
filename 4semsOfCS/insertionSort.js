
// * insertion sort part 1
// occasionally useful

// * worst case = similar to bubbleSort
// * best case = if pretty sure list is ALMOST or likely already sorted --> O(n)

// * bigO ?? => inner loop goes over sorted list to find correct place to insert item, another outer loop to go over all the numbers.
// 2 LOOPS !! => O(n2)

const insertionSort = arr => {
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[i] < arr[i]) {
        let spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
    }
  }
  return arr;
};