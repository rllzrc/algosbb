// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { Merge Intervals !!! }

const findPairs = (nums, k) => {
    // sort nums arr
    nums = nums.sort();
    // create a var to store output in
    let output = 0;
    // loop through nums - first outer loop is fixed at one num
    for(let i = 0; i < nums.length; i += 1) {
        // check if current element is greater than 0 and is same as prev element, keep going
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        // second inner loop will go over every num after fixed num above to check pairs
        for(let j = i + 1; j < nums.length; j += 1) {
            // check if j is greater than next el && is the same as previous el
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            // check if j - i = k
            if(Math.abs(nums[j] - nums[i]) === k) {
                output += 1;
            }
        }
    }
    return output;
};
