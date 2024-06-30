function combineAndSum(...numbers) {
    return new Promise((resolve, reject) => {
        // Check if all arguments are numbers
        if (!numbers.every(num => typeof num === 'number')) {
            reject('Error: All arguments must be numbers.');
        }

        // Calculate the sum of numbers
        const sum = numbers.reduce((acc, num) => acc + num, 0);

        // Prepare the result object
        const result = {
            numbers: [...numbers], // Collect all numbers into an array
            sum: sum // Calculate the sum of all numbers
        };

        // Resolve the promise with the result object
        resolve(result);
    });
}

// Example usage:
combineAndSum(1, 2, 3, 4, 5)
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
