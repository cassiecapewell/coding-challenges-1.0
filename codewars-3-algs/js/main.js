// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You are given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//  1 hr = 0.5 litres

function litres(time) {
  return Math.floor(time * 0.5);
}

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  let arr = []
  for(let i=1; i<=n; i++){
    arr.push(i)
  }
  return arr
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(distanceToPump > mpg*fuelLeft){
    return false
  }else{
    return true
  }
}

// refactored

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return ((distanceToPump > mpg*fuelLeft) ? false : true)
}

// refactored

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};
