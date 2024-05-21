//asabeh 30 days of js solution challenge

alert('Open the browser console whenever you work on JavaScript');
 let userAge = prompt('Please enter your age?');
  userAge > 18 || userAge == 18
  ? console.log("you are old enough to drive")
  : console.log(`please wait for the ${18 - userAge}  of years he needs to turn 18 `)

let myAge = 22;
userAge > myAge
 ? console.log(`you are ${userAge - myAge} years  older than me`)
 : console.log(`I am ${myAge - userAge} years older than you`)

let a = 4;S
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