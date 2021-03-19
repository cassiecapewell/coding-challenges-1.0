// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase()
}


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  if(month === 1 || month === 2 || month === 3){
    return 1
  }else if(month === 4 || month === 5 || month === 6){
    return 2
  }else if(month === 7 || month === 8 || month === 9){
    return 3
  }else{
    return 4
  }
}

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  if((s1+s2+s3)/3 >= 90) {
    return 'A'
  }else if((s1+s2+s3)/3 >= 80){
    return 'B'
  }else if((s1+s2+s3)/3 >= 70){
    return 'C'
  }else if((s1+s2+s3)/3 >= 60){
    return 'D'
  }else{
    return 'F'
}
}
// refactored:
function getGrade (s1, s2, s3) {
  let avg = (s1+s2+s3)/3

  if (avg >= 90) return 'A';
  else if(avg >= 80) return 'B';
  else if(avg >= 70) return 'C';
  else if(avg >= 60) return 'D';
  else return 'F';
}
// refactored:
function getGrade (s1, s2, s3) {
  let avg = (s1+s2+s3)/3
  return avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : avg >= 60 ? "D" : "F"
}
