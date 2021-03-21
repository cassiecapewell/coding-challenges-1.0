// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  let reverse = str.split(" ").reverse().join(" ")
  return reverse
}
reverseWords("hello world!")
