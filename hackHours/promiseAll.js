const promiseAll = (arrPromises) => new Promise(
  (resolve, reject) => {
    // variable to track how many promises have been resolved
    let resolvedCount = 0;
    // array that will return the resolved promises (IN THE ORDER THEY APPEAR IN THE ARRAY)
    const returnArray = [];
    // iterate through the array
    arrPromises.forEach((p, index) => {
      // when each promise resolves (.then), increment the resolved count, and place the result
      // at the correct index of the returnArray variable
      p.then((result) => {
        resolvedCount += 1;
        returnArray[index] = result;
        // check if the resolvedCount is the same as the inputted array of promises
        if (resolvedCount === arrPromises.length) {
          // resolve the promise and return the returnArray... fairly semantic here...
          resolve(returnArray);
        }
      })
        // if there is an error with any of the promises, reject the entire Promise
        .catch((err) => {
          reject(err);
        });
    });
  },
);