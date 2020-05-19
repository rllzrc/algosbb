// * Bagels Group LeetCode Challenge --> Kth Largest Element in an Array

// T A S K !!!
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// * Roadmap: ~
// sort nums, now its in order, then return the kth to last thing
// * first attempt: brute force/naive solution use the sort method!
// runtime complexity:
// * O(n log n) -> sorting overhead
const findKthLargest1 = (nums, k) => {
  // sort out array of nums
  const sortedArr = nums.sort();
  // then return out the kth index in the nums array
  return sortedArr[sortedArr.length - k];
}

// * second attempt: use heap ds!
// MinHeap: The parent node is always less than the child nodes.
// accesing things like the min/max values work nicely w heaps since it is O(1) or constant lookup time
// esp w that priority queue lookup ~

class MinHeap {

  constructor () {
      /* Initialing the array heap and adding a dummy element at index 0 */
      this.heap = [null]
  }

  getMin () {
      /* Accessing the min element at index 1 in the heap array */
      return this.heap[1]
  }

  insert (node) {

    // Inserting the new node at the end of the heap array 
    this.heap.push(node)
    
    // To find the correct position for the new node --> 
    // keep checking if current elemnt with its parent:
    // current node and parent are swapped if current is smaller than its parent --> INDEX of current node = current && parent = current/2

    if (this.heap.length > 1) {
        let current = this.heap.length - 1
        
        // Traversing up the parent node until the current node (current) is greater than the parent (current/2) 
        while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
        
            // destructuring syntax to swap these two elements
            // aka heapifyUP! 
            [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
            current = Math.floor(current/2)
        }
    }
  }


  remove() {
    // Smallest element is at the index 1 in the heap array */
    let smallest = this.heap[1]
    
    // When there are more than two elements in the array, we put the right most element at the first position and start comparing nodes with the child nodes.

    // check the minHeap if the size is greater than 2
    if (this.heap.length > 2) {
        this.heap[1] = this.heap[this.heap.length-1]
        this.heap.splice(this.heap.length - 1)

        // if only 3 elements, swap the smallest with the root node
        if (this.heap.length === 3) {
            if (this.heap[1] > this.heap[2]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return smallest
        }

        // more than 3 elements? well we traverse down the deap to find a good place for the root node aka heapifyDown!

        // leftChildIndex = current * 2 // i* 2
        // rightChildIndex = current * 2 + 1 // i * 2 + 1
        let current = 1
        let leftChildIndex = current * 2
        let rightChildIndex = current * 2 + 1

        // checks if the current element is smaller than both of its child nodes. then the smallest child node and the parent node are swapped and the current variable is updated accordingly

        while (this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] ||
                    this.heap[current] > this.heap[rightChildIndex])) {
            if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                current = leftChildIndex
            } else {
                [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                current = rightChildIndex
            }

            leftChildIndex = current * 2
            rightChildIndex = current * 2 + 1
        }
    }
    
    if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] < this.heap[current]) {
        [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
    }
    
    // if length is 2, no need to check anything..simply remove the element at index 1 using splice
    
    else if (this.heap.length === 2) {
      this.heap.splice(1, 1)
    } else {
      return null
    }

    return smallest
  } 
}


const findKthLargest = (nums, k) => {
  // throw all nums in a heap, smallest num will be at the root
  // last k nums in the min heap --> kth largest will be root
}

// * test cases !!
console.log(findKthLargest([3,2,1,5,6,4], 2)); // -> 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // -> 4