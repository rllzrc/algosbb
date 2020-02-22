// * bubbleSort!!!!
// bigO notation: 
// one inner loop to check to see if indexes need to be swapped, and then an outer loop to check if anything was swapped --> O(n)2

// solution # 1; ˀnested for loops

function bubbleSort(arr) {
	for(let k = arr.length - 1; k > 0; k--) {
		for(let i = 0; i < k; i++) {
			if(arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
	}

	return arr;
}

// solution 2: with while loop and do loop

const bubbleSort2 = arr => {
	do {
		let swapped = false;
		for(let i = 0; i < arr.length; i ++){
			if(nums[i] > nums[i + 1]){
				let temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
	return arr; 
};

const numsArray = [10,5,3,8,2,6,4,7,9,1] // --> expected output: [1,2,3,4,5,6,7,8,9,10]
console.log(bubbleSort(numsArray));

// test case:
describe('bubble sort', function() {
	it
})