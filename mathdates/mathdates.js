
// date methods  
const newDate = new Date();
console.log(newDate)
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getMilliseconds());
// note there are same get and set methods for dates 
// // MATH CONSTANTS 
console.log(Math.PI);
console.log(Math.E)
console.log( Math.SQRT1_2);
console.log( Math.SQRT2);
console.log(Math.LN2);
console.log( Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E)
// MATH METHODS
console.log(Math.round(4.7)) // round down and  up the number to 5 or 4 if < .5
console.log(Math.floor(4.9));// always round down no matter how big
console.log(Math.floor(-4.9)); // -5
console.log(Math.trunc(4.9)); // return integer  = 4
console.log(Math.sign(-4.9));  // check if arg is -ve or +ve
console.log(Math.sign(4.9));// +1
console.log(Math.pow(4,10)); //4 pow 10
console.log(Math.sqrt(64));//square root
console.log(Math.abs(-4.1));//1
console.log(Math.sin(120 * Math.PI /180 ));// converted degree to radians  0.8660254037844387
console.log(Math.cos(90 * Math.PI /180 ));//converted degrees to radians  6.123233995736766e-17
console.log(Math.min(20, 120,5,12,700)); //5
console.log(Math.max(20, 120,5,12,700));// 700
//  Math.random() and Math.floor()
let arr = [ "hello", "bro", "hey", "MAY"];
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");
btn.addEventListener("click", () => {
demo.innerHTML = Math.floor(Math.random() * 30)
})
console.log( Math.floor(Math.random() * 30));
