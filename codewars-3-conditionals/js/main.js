// In this kata, we will make a function to test whether a period is late.
// Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
function periodIsLate(last, today, cycleLength) {
  return (today-last)/86400000>cycleLength
}
// one day = 86400000 ms


// There's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!
// If the winner is George Saint Pierre he will obviously say:
// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:
// "I'd like to take this chance to apologize.. To absolutely NOBODY!"
let quote = function(fighter) {
  if (fighter.toLowerCase() === 'george saint pierre'){
    return "I am not impressed by your performance."
  }else{
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
  }
}

// refactored
let quote = function(fighter) {
  return fighter.toLowerCase() === "george saint pierre" ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};


// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
  }else{
    return "Hello, " + name + "!";
  }
}

// refactored
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}
