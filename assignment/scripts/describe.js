// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Make a variable called name and set it's value to Dane.
// Check if the name equals Mary.
// If it is make it console log Hi Mary! Otherwise have it console log How do you do?
// console.log should read How do you do?

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Make an undefined variable called secret. Make a variable called code and set it's value to 123.
// If code is equal to 123 make secret equal super. 
// Within the same if statment, make code equal to code multiplied by 2.
// If code is greater than 250 make secret = duper.
// console.log secret which should return super.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
/* Make a variable called isStudent and set it to true, make a second one called age and set it to 34, make 
a third called zip and set it to 55407*/
// If isStudent equals true and the zip is over 80000, console.log `You're a student on the West Coast!`
// If isStudent is false or the age is less than 30, cosole log 'What are your hobbies?' 
// If isStundent is true console log 'Welcome to Prime!' Otherwise console log 'How about the weather?'
// Console should return Welcome to Prime!

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//Switch red to colorTwo and blue to colorOne
/*let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //Add colorTwo = 'purple'; here
}*/


/*I couldn't get the question above to work as an "if" statement so I made a function below.
let colorOne = 'blue';
let colorTwo = 'red';

function mix() {
  colorOne = 'purple';
  colorTwo = 'purple';
};

mix();

console.log(colorOne);
console.log(colorTwo);
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//Change const to let to allow the time to change when necessary
const time = 4;
//Change || (which means "or") to && ("and").
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//Change <= to >=
if(minAge <= age) {
  //change the first console log to "enter" and the second to "no entry".
  console.log('no entry');
} else {
  console.log('enter');
}
*/

