function hasTargetSum(array, target) {
  // Write your algorithm here
}function hasTargetSum(arr, target) {
  if (arr.length < 2) {
    return false;
  }

  let complementSet = new Set();

  for (let num of arr) {
    let complement = target - num;
    if (complementSet.has(complement)) {
      return true;
    }
    complementSet.add(num);
  }

  return false;
}

// Test cases
let array1 = [3, 8, 12, 4, 11, 7];
let target1 = 10;
console.log(hasTargetSum(array1, target1));  // Output: true

let array2 = [22, 19, 4, 6, 30];
let target2 = 25;
console.log(hasTargetSum(array2, target2));  // Output: true

let array3 = [1, 2, 5];
let target3 = 4;
console.log(hasTargetSum(array3, target3));  // Output: false

let array4 = [-7, 10, 4, 8];
let target4 = 3;
console.log(hasTargetSum(array4, target4));  // Output: true

let array5 = [1, 2, 3, 4];
let target5 = 5;
console.log(hasTargetSum(array5, target5));  // Output: true

let array6 = [2, 2, 3, 3];
let target6 = 4;
console.log(hasTargetSum(array6, target6));  // Output: true

let array7 = [4];
let target7 = 4;
console.log(hasTargetSum(array7, target7));  // Output: false


/* 
  Write the Big O time complexity of your function here
  The time complexity of the `hasTargetSum` function is O(n), where n is 
  the size of the input array `arr`. 

In the worst case, the function iterates through each element of 
the array once. The loop iterates n times, where n is the length of 
the array. Within each iteration, the operations performed are constant 
time operations: calculating the complement and checking if it exists in 
the set (both O(1) operations on average).

Therefore, the overall time complexity of the function is linear, O(n),
 as it scales linearly with the size of the input array.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(arr, target):
    if length(arr) < 2:
        return false

    complementSet = empty set

    for each num in arr:
        complement = target - num
        if complement exists in complementSet:
            return true
        add num to complementSet

    return false

*/

/*
  Add written explanation of your solution here
  The hasTargetSum function aims to determine whether there exists a pair 
  of numbers in the given array that sum up to the target value.

The function first checks if the length of the array is less than 2. If so,
 it means there are not enough elements in the array to form a pair, and 
 the function immediately returns false.

Next, the function initializes an empty set called complementSet. 
This set will store the complements encountered during the iteration.

The function then iterates over each number in the array. For each number, 
it calculates the complement by subtracting the current number from the
 target value. This complement represents the value needed to achieve the
target sum when added to the current number.

The function checks if the complement already exists in the complementSet. 
If it does, it means a pair of numbers that sum up to the target value has 
been found, and the function returns true.

If the complement does not exist in the complementSet, the function adds the
 current number to the set. This allows future numbers to check if they are 
 a complement for a previously encountered number.

If no pair is found after examining all numbers in the array, the function
reaches the end of the loop and returns false.

The solution utilizes a set to efficiently store and check for complements.
 By using a set, the time complexity for checking if an element exists 
 is O(1) on average, leading to an overall time complexity of O(n),
  where n is the length of the input array.

In summary, the hasTargetSum function iterates through the array, 
keeping track of complements encountered using a set. It checks if the complement for each number already exists in the set, indicating the presence of a pair with the desired sum. The function returns true if such a pair is found and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
