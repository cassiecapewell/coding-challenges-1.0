// Your task is to create function isDivideBy to check if an integer number is divisible by each out of two arguments.

function isDivideBy(number, a, b) {
  return number%a === 0 && number%b === 0 ? true : false
}

// refactored
let isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
