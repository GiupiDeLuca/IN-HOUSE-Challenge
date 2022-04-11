/**
 * 
 * @param {an integer} num 
 * @returns {boolean}
 * The problem is broken down into small bits. 
 * This function only checks if the number provided is a prime number or not
 */

 function isPrime(num) {
    if (num === 0 || num === 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  /* The user is then prompted to enter a number */
  let n = parseInt(prompt("Enter number: "));
  
  /* The program will throw an error if the input is not a positive integer greater than 1 */
  /* and will prompt the user to enter a new input */
  while (n <= 1) {
    console.error("Number must be a positive integer greater than 1");
    n = parseInt(prompt("Enter number: "));
  }
  
  /* The program will then print out all the prime numbers from 2 to n */
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }