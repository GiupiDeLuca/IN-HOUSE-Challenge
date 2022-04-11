/**
 *
 * @param {integer} num
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

/**
 *
 * @param {positive integer > 1} n
 * This function checks for valid integers, then iterates through all numbers between 2 and n, 
 * then prints out all prime numbers in the desired interval
 */

function primes(n) {
  if (n <= 1) console.error("Number must be a positive integer greater than 1");
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

/* Calling the function */
/* Requires a parameter */
primes();
