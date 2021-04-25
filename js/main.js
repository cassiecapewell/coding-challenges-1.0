// Implement a function which multiplies two numbers.

function multiply(n1,n2){
  return n1*n2
}
// refactored
let multiply = (a, b) => a * b;

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  return (n%x===0 && n%y===0) ? true : false
}

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let strArray = str.split("");
  let arr = [];
  strArray.forEach(function(letter){
    if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter === 'u')) {
      arr.push(letter)
    }
  })
  let vowelsCount = arr.length;
  return vowelsCount
}

// refactored
function getCount(str) {
  let vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
      vowelsCount += 1;
    }
  });
  return vowelsCount;
}
