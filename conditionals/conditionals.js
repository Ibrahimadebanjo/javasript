// syntax
let condition = "";
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
let num = 10;
if(num > 5){
    console.log(`${num} is greater than 5`)
} else {
    console.log(`${num} is lesser than`);
}
if (num < 0 ) {
    console.log(`${num} is a negtive number`)
  } else {
    console.log(`${num} is a positive number`);
  }

  let raining = true;
  if(raining){
    console.log("remember to take your coat")
  } else {
    console.log("No need to take a coat");
  }
  raining = false;
  if(raining){
    console.log("remember to take your coat")
  } else {
    console.log("No need to take a coat");
  };

  //  else if is used when  we have more than two conditions?
  if (condition) {
    // code
} else if (condition) {
  // code
} else {
   //  code

}
num = 0;
if(num > 0){
    console.log(`${num} is a positive number`);
}
else if(num < 0){
    console.log(`${num} is a negative number`);
}
else if(num === 0){
    console.log(`${num} is a equals to zero`);
}
else{
    console.log(`${num} is not a number `);
}

let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}
let greetings = "";
let hrs = new Date().getHours();
console.log(hrs)
if (hrs < 12 ){
    greetings = "Good Morning!";
} else if(hrs > 12 || hrs < 17){
greetings = "Good Afternoon!";
}
else if (hrs > 17 || hrs < 20){
greetings = "Good Evening!";
} else {
    greetings = "Good Night!";
}
console.log(greetings);
// switch statements as an alternative to if else starement 
let caseValue;
switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // code
     break
    case 3:
     // code
     break
    default:
     // code
  }

weather = "cloudy";
 switch(weather) {
    case 'sunny':
        console.log('Go out freely.')
        break
    case "rainy" : 
    console.log('You need a rain coat.')
    break
    case "cloudy" : 
    console.log("It might be cold, you need a jacket.")
    break
    default : 
    console.log("No need for rain coat.")
};
let dayUserInput = prompt("What day is today?");
let day  = dayUserInput.toLowerCase();
switch (day) {
    case "sunday":
        console.log("Today is Sunay.")
        break;
    case "monday":
    console.log("Today is Monday.")
    break; 
    case "tuesday":
        console.log("Today is Tuesday.")
        break;
case "wednesday":
     console.log("Today is Wednesday.")
    break
case "thursday":
     console.log("Today is Thursday.")
 break;
 case "friday":
     console.log("Today is Friday.")
 break;
 case "saturday":
     console.log("Today is Saturday.")
 break; 
default : 
console.log("it's not a week day");
}

//
let day2;
let currentDay = new Date().getDay();
console.log(currentDay);// this returns 3 
//there for the 3 is wednesday and the case 1,2... is the one being tested 
switch(currentDay){
case 0:
day2 = "sunday";
break;
case 1:
day2 = "monday";
break;
case 2:
day2 = "tueday";
break;
case 3:
day2 = "wednesday";
break;
case 4:
day2 = "thursday";
break;
case 5:
day2 = "friday";
break;
case 6:
day2 = "saturday";
break;
}
console.log(day2);

switch(currentDay){
case 0:
console.log("Today is Sunday");
break;
case 1:
console.log("Today is Monday");
break;
case 2:
console.log("Today is Tuesday");
break;
case 3:
console.log("Today is Wednesday");
break;
case 4:
console.log("Today is Thursday");
break;
case 5:
console.log("Today is Friday");
break;
case 6:
console.log("Today is Saturday");
break;
}

let num2 = prompt('Enter number');
switch (true) {
  case num2 > 0:
    console.log('Number is positive');
    break;
  case num2 == 0:
    console.log('Numbers is zero');
    break;
  case num2 < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}
//terinary operator
//syntax 
// what to test
// ? retun this if condition is true
// : retun this if condition is false
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
  // for multiple conditions usisng ternary operator
// condition 
// ? return value one;
// : condition2 ? return value two;
// : condition3 ? return value three;
// :return value four;
// equivalent to
// if(condition){  return value 1}
// else if (condition2){ return value 2};
// else if (condition3){ return value 3};
// else return value 4;

///example

console.log(hrs)
hrs < 12
   ? greetings = "Good Morning!"
   : (hrs > 12 || hrs < 17 ) ? greetings = "Good Afternoon!"
   : (hrs > 17 || hrs < 20) ? greetings = "Good Evening!"
   :greetings = "Good Night!";
console.log(greetings);
// JavaScript 30 solution challenge

alert('Open the browser console whenever you work on JavaScript');
 let userAge = prompt('Please enter your age?');
  userAge > 18 || userAge == 18
  ? console.log("you are old enough to drive")
  : console.log(`please wait for the ${18 - userAge}  of years he needs to turn 18 `)

let myAge = 22;
userAge > myAge
 ? console.log(`you are ${userAge - myAge} years  older than me`)
 : console.log(`I am ${myAge - userAge} years older than you`)

let a = 4;
let b = 3;
if (a > b){
    console.log("a is grater than b")
}
else{
    console.log("a is less than b")
}
a > b 
?  console.log("a is grater than b")
:  console.log("a is less than b");

let userM = prompt("enter a number");
userM % 2
? console.log(" userM is an Odd number ")
: console.log(" userM is an Even number");
let text = "A";
switch (text){
case "A" :
    console.log("test grades range between 80 - 100");
break;
case "B" :
    console.log("test grades range between 70 - 89");
break;
case "C" :
    console.log("test grades range between 60-69");
break;
case "D" :
    console.log("test grades range between 50-59");
break;
case "F" :
    console.log("test grades range between 0-49");
break;
}

let input = prompt("Enter a month between january and december");
let output = input.toLowerCase();
switch (output) {
case "september", "october", "november":
console.log("The season is Autumn")
break;
case "december", "january", "february":
console.log("The season is Winter")
break;
case "march", "april", "may":
console.log("The season is Spring")
break;
case "june", "july", "august":
console.log("The season is Summer")
break;
}

// number of days in a month
switch(output) {
case "january", "march", "may", "july", "august", "october", "december": 
console.log(`${output} has 31 days`);
break;
case "february" : 
console.log(`${output} has 28 or 29 days`);
break;
case "september", "april", "june", "november" : 
console.log(`${output} has 30 days`);
break;
}