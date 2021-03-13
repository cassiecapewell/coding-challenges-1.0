// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

function abbrevName(name){
  let nameSplit = name.split(' ');
  let firstInitial = nameSplit[0].charAt(0).toUpperCase();
    let secondInitial = nameSplit[1].charAt(0).toUpperCase();
  return(`${firstInitial}.${secondInitial}`);
}

// alternate way:
// function abbrevName(name){
//
//   let nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }


// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(country, score){
  if(score[0]>score[1]){
    return `At match ${country[0]} - ${country[1]}, ${country[0]} won!`
  }else if(score[0]<score[1]){
    return `At match ${country[0]} - ${country[1]}, ${country[1]} won!`
  }else{
    return `At match ${country[0]} - ${country[1]}, teams played draw.`
  }
}
console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0]))

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  if (s.length%2===0){
    return s.charAt(s.length/2-1)+s.charAt(s.length/2)
  }else{
    return s.charAt(s.length/2-.5)
  }
}
console.log(getMiddle("waffles"))

// Return the average of the given array rounded down to its nearest integer. The array will never be empty.

function getAverage(marks){
  return Math.floor(marks.reduce((acc, c) =>(acc+c))/marks.length)
}
console.log(getAverage([93,91]))

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise

function hero(bullets, dragons){
 if(dragons*2<=bullets){
   return true
 }else{
   return false
 }
}
// alternative:
// return bullets >= dragons * 2

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
 let newArr1 = arr1.reduce((acc, c) =>(acc+c))
 let newArr2 = arr2.reduce((acc, c) =>(acc+c))
 return newArr1 + newArr2
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))


// It's bonus time in the big city!  Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia)

function bonusTime(salary, bonus) {
  return bonus ? `\u00A3${salary*=10}` : `\u00A3${salary}`
}
console.log(bonusTime(10000, true))
