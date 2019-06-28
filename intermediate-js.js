// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

please = (arr) => {
  return arr.reverse(arr)
}
console.log(please(originalArray));

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
  type: "Roadbike",
  gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
  wheels: {
    count: 2,
    specs: ["road tires", "AX-7563", "80-115 PSI"],
    brand: "Trek"
  }
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

letterCounter = (str) => {
  var count = 0
  for (i = 0; i < str.length; i++) {
  //if (str[i].toLowerCase() === "l") {
    if ((str[i] === "l")  || (str[i] === "L") ){
      count += 1
    }
  }
  return count
}

console.log(letterCounter(ourString));

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
function getFib(){
  var answer = [1,1]
  for(let i = 3; i <= 10; i++){
    var n = answer[i - 3] + answer[i -2]
    answer.push(n)
  }
  return answer
}
console.log(getFib())
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function oddChecker(arr){
  var answer = []
  for(let i = 0; i < arr.length; i++){
    var element = arr[i]
    if(Number.isInteger(element) ){
      if(element % 2 !== 0)
        answer.push(element)
    }
  }
  return answer
}

console.log(oddChecker(fullArr))