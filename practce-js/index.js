// // Es5 features 
// var  spaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }
// var zeus = new spaceShuttle("jupiter");
// console.log(zeus.targetPlanet);


// // Es6 features 
// class spaceShuttle {
//     constructor(targetPlanet) {
//  this.targetPlanet = targetPlanet;
//     }
// }

// var zeus = new spaceShuttle("jupiter");
// console.log(zeus.targetPlanet);
// var  txt =document.getElementById("demo");

// const person = {
//     name: ' ',
//     set name(value){
//         if(typeof value !== "string"){
//             throw new Error("must be a string");
//         }
//          this.name = value;
//     }
// }
// person.name ="jane";
// txt.innerText = person.name;
let demo =document.getElementById('demo');
const date = new Date("2023-11-25");
demo.innerText = date;

let y = BigInt("1230449858858023759037478878945716767758730267380567835890");
console.log(y);
 var z = undefined;
console.log(typeof(""));
console.log(typeof(true));
console.log(typeof(x));

function calculate(q, w) {
return q * w;
}
console.log(calculate(20,2));

const toCelsius = (fahrenheit)=> {
return (5/9) * (fahrenheit - 32);
}
console.log(toCelsius(77));

let person = {
    firstName : "john",
    lastName : "Doe" ,
    fullName : () => {
        return this.firstName + " " + this.lastName;
    }
}
console.log(this.fullName);
console.log(new Date() )
 let txt1 = "hello ";
 let txt2 = "world";
let str = "   john, Doe, ibrahim, hello world, hello     ";
// console.log(str.length);
// console.log(str.slice(-10,-6));
//  console.log(str.substring(3,-9));
//  console.log(parseInt("400", 10));
//  console.log(parseFloat(3.14));
//  console.log(parseFloat(12827474724787277477277272747274n));
//  console.log(parseFloat(Infinity));
//  const arr = [ "french",  , "korean  indonesia", ws'japanese', + "spanish",];
//  console.log(arr.length);
console.log(str.charAt("11"));
console.log(str.charCodeAt(13));
console.log(str.indexOf("hello"));
console.log(str.lastIndexOf("hello"));
console.log(str.startsWith("hello"));
console.log(str.endsWith("hello"));
console.log(str.slice(10,20));
console.log(str.includes("Doe"));
console.log(txt1.concat(txt2));
console.log(str.split("|"));
console.log(str.substring(10,5));
console.log(str.replace("hello", "world"));
console.log(str.replaceAll("hello", "world"));
console.log(str.search("hello"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.repeat(4));
console.log(str.split(3));
console.log(str.matchAll("world"));
console.log(str.match("world"));

// REG EXP
console.log(str.replace(/HELLO/i, "Boom!!")); //case insensitive
console.log(str.replace("hello", "Boom!!")); //case sensitive
console.log(str.replace(/HELLO/gi, "Boom!!")); //global case insensitive
console.log(str.replace(/hello/g, "Boom!!")); //global case sensitive
console.log(str.trim()) // this method removes whitespace 
console.log(str.trimStart());
console.log(str.trimEnd());
// stringpadding
let text = "9";
console.log(text.padStart("10","0"))  // this method pad variables first parameter is count while second is letter representing count
console.log(text.padEnd("10","0")); 
//  Extracting strings from variables 
console.log(str.charAt(18));
console.log(str.search("world")) //this method can not take second value


//Template literals
let myName = "John Doe";
console.log(  `<h2>${myName} </h2>`);
let header = "Template  Literals";
let html = demo.innerText = `"my name is <h1>${myName}</h1>`;
console.log(html);
let k = new Number(1283);
console.log(k);
let number = 3.22;
console.log(number.toString());
console.log( number.toExponential(10));
console.log(Number( new Date("1970-01-02")));
console.log(parseFloat("years"));
console.log(Number(129837));
// JAVASRIPT NUMBER METHODS  
console.log(Number.isInteger(2.2));
console.log(Number.isInteger(2));
console.log(Number.isSafeInteger(28));
console.log(Number.isSafeInteger(28.20));

// JAVASCRIPT NUMBER OBJECTS 
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

// W3SCHOOLS  JS
// //Arrays
var cars = [ "toyota ", "mercedes",  "lexus", "BMW "];
cars.forEach((x) => { console.log(x.length > 6) })
console.log(cars[2]);
// //accessing an array element 
cars[1] = "bugati";
cars.push(() => {
    return(
        "Hello WOrld"
    )
})
console.log(cars);
 //  creating an array with new keyword  but not neccessary dong that 
const carArr = new Array("bugati");
console.log(carArr);
console.log(cars[cars.length -1] );
// // converting an array to a string using tostring method 
console.log(cars.toString());
// // accessing full array by calling the name
console.log(Date());
// // array methods 
console.log(cars.length);
console.log(cars.sort());
// // last element in aan array
console.log(cars[cars.length -1] );
// looping through an array

for(i=0; i<cars.length; i++){
        console.log(cars[i] );
}
// adding array element 
const fruitJuice = [];
console.log(fruitJuice.push("orange","lemmon","pineapple","apple"));
 console.log(fruitJuice);
let text2 = "<ul>";
for (let i = 0; i < fruitJuice.length; i++) {
    text += "<li>" + fruitJuice[i] + "</li>";
}
text2 += "</ul>";
console.log(text);
console.log(fruitJuice.pop("lemmon")); // cannot work this way && wrong argument
console.log(fruitJuice)
console.log(fruitJuice.pop()); // correct syntax remove last any and no argument
console.log(fruitJuice)
console.log(fruitJuice.join("+"))
console.log(fruitJuice.join("*"));
// //  Associate Arrays : arrays with named indexes are callled Associate Array
console.log(typeof fruitJuice);
 // continuation of javasript array methods 
 console.log(fruitJuice.shift());
 console.log(fruitJuice)
console.log(fruitJuice.unshift("strawberry"));
console.log(fruitJuice);
console.log(delete(fruitJuice[1])); ;
console.log(fruitJuice) 
// delete method creates holes use pop() or shift() instead 
const myNumArr = [[1,2],[23,45], [55,10]];
console.log(myNumArr.flat()); // retrun a new array of sub arrays
console.log(fruitJuice)
fruitJuice.splice(2,1, "pea","carrot");//splice(addd new items to an array) 1st arg position and 2nd arg how many to be removed
console.log(fruitJuice);
 fruitJuice.splice(1,1, "honey");
console.log(fruitJuice);
//the splice method with two arguments act like slice but with other args it ads to the array untill log the new 
// to the console then it will show up!!
// slice method
console.log(cars);
console.log(cars.pop())
console.log(cars.pop())
console.log(cars)
console.log(cars.splice(2,3, "lambo", "honda", "red bull" )); 
// console.log(cars.splice(1,2));
console.log(cars)
cars = [ "toyota ", "mercedes",  "lexus", "BMW "];
console.log(cars.slice(1,3));
 console.log(fruitJuice.reverse());
// //  numeric sort and compare function
const points = [ 20,30,19,74,100,400,2,1];
// sorting alphabetically
 console.log(points.sort());
// compare function numerical sorting and numerica sorting 
 const positiveSort =  points.sort( (a,b) => {
return a-b;
});
console.log(points);
// // backward sorting
const negativeSort =  points.sort( (a,b) => {
    return b-a;
});
console.log(points);

//setting and sorting arrays using FISHER YATES method
for(let i =points.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
 points[i] = points[j];
 points[j] = k;
}
// function for finding max value in an array of numbers
const maxFunction = (arr) => {
    return Math.max.apply(null,arr);
}
// // function for finding min value in an array of numbers
console.log(maxFunction(points));
const minfunction = (arr) => {
    return Math.min.apply(null,arr);
}
console.log(minfunction(points));

// JAVASCRIPT ARRAY ITERATION
console.log(points.map((x) => { 
    return(
        x * 10
    )
}))
// filter() method 
const over18 = points.filter((x) => x > 18 ) ;
console.log(over18);
console.log(points.filter((x) => {
    return x > 40;
}));
// reduce() method 
console.log(points.reduce((sum, x) => {
    return sum + x;
}));
//array every method
console.log(points.every((x) => {
    return  x >= 100 || x > 0 ;
}));
// array some() method
console.log(points.some((x) => {
    return(
        x >= 100 || x > 0
    )
}));
const someover18 = points.some((x) => x >18);
console.log(someover18);

const fruits = ["orange", "banana","pineapple"];
console.log(fruits.findIndex((x) => {
return x = "orange" ; 
}));
// // includes() methods
console.log(fruits.includes("mangoes"));

// END OF FREECODECAMP

// w3 schools
// comparison and logical operators 
let age = 10;
let votable = (age< 18 ) ? "too young to vote" : "capable of voting";
console.log(votable);
// if else statement
let greetings = "";
const hrs = new Date().getHours();
if(hrs < 18){
    greetings = "good day";
}
else {
    greetings = "good evening";
}
console.log(greetings);
// swith statements
let day;
switch(new Date().getDay()){
case 0:
day = "sunday";
break;
case 1:
day = "monday";
break;
case 2:
day = "tueday";
break;
case 3:
day = "wednesday";
break;
case 4:
day = "thursday";
break;
case 5:
day = "friday";
break;
case 6:
day = "saturday";
break;
}
console.log(day);

// common code blocks
let int = "0";
let txt;
switch(int === Number)
{
    case 1:
        case 2 :
            txt = "this is a string";
            break;
            case 3:
                case 4:
                    txt = 34;
                    break;
                    default :
                    txt = "nothing to be found";

}
console.log(txt);

// javasript loops 
for (i=0; i < cars.length; i++) {
 console.log(cars[i]);
}
txt = "";
for (let i=0; i <6; i++) {
console.log([txt += i]);
}
   txt = "";
   for (let i=0; i <6; i++) {
   console.log([i]);
   }

// for over arrays 
const nu = [10,29,39,7,10];
txt = "";
for (let i=0; i <nu.length; i++) {
    console.log(nu[i]);
}
// using for in loop 
txt = "";
for( x in nu){
    console.log(txt += nu[x]);
}

// using forEach method 
txt ="";
nu.forEach(myFunc);
function myFunc(v){
   console.log( txt += v);
}
txt = "";
nu.forEach((v) =>  console.log( txt += v));
// 
let manyCars = ["honda ", "golf"]
txt = " ";
for (let p of manyCars){
    txt += p;
}
// while loop
txt = "";
i = 0;
while(i<10){
    console.log(i);
    i++;
}
// do while loop
i = 0 ;
do{
    console.log(i);
    i++;
}
while(i<10);
i=0;
// iterating over a string 
const w3s = "w3schools";
txt = "";
for(const x of w3s){
console.log(txt += x + "<br>");
}
// basic Data structures 
const complexArr = [
 {
    fName: "John"
 },
 {  age : 20}
 [ {lName: "Doe"}]
];
console.log(complexArr);
let romanNumerals = [ "xxi", "xxii",];
romanNumerals.unshift("xx", "xv");
console.log(romanNumerals);
romanNumerals.splice(0, 1);
console.log(romanNumerals);
console.log(romanNumerals.slice(2,3));
console.log(romanNumerals);
// copy an exact Array using spread operator
let copy = [...romanNumerals]
console.log(copy);
 copy = ["hello","i've"," been coding","and coding never ends",...romanNumerals]
console.log(copy);
// itearte through all arrays items using for loop
for(let i =0; i < romanNumerals.length; i++) {
console.log(romanNumerals[i]);
}
// complex multi dimentional arrays 
let multiDArr = [
    // level one
    "hey you",
    ["deep level two"],
    [[ "deeper level three"]],
    [[["deepest level four"]]],
    [[[[ "deepest level five"]]]],
[[[[["deepest level six"]]]]],
[[[[[["deepest level seven"]]]]]]
];
console.log(multiDArr[6][0][0][0][0][0]); 
console.log(multiDArr[6][0][0][0][0][0][0]);
console.log(multiDArr[5][0][0][0][0]);
console.log(multiDArr[5][0][0][0][0][0]);
console.log(multiDArr[4][0][0][0]);
console.log(multiDArr[4][0][0][0][0]);
console.log(multiDArr[3][0][0]);
console.log(multiDArr[3][0][0][0]);
console.log(multiDArr[2][0]);
console.log(multiDArr[2][0][0]);
console.log(multiDArr[1]);
console.log(multiDArr[1][0]);
console.log(multiDArr[0]);
console.log(multiDArr[0]);
const takkenCharacter = {
    player: "IB",
    fightingStyle : "TEK WON DOE",
    human : true,
}
takkenCharacter.age = 20;
takkenCharacter["hair style"] = "african Afro";
takkenCharacter.country = "south Africa";
console.log(takkenCharacter);
delete takkenCharacter.age;
console.log(takkenCharacter);
console.clear()
// JAVASRIPT SETS
const letters = new Set(["a","b","c","d","e","f","g"]);
console.log(letters.size);
letters.add('h');
console.log(letters.size);
// create variable sets and add
let next = "i";
letters.add(next);
console.log(letters.size);
// for each method
txt = "";
letters.forEach((value) => { txt += value + "<br>" });
console.log(txt);
// the values method
let iterator = letters.values();
console.log(iterator);
// javasript maps 
 const maps = new Map([
    ["apples", 400],
    ["oranges", 300],
    ["grapes", 900]
 ])
// set methods
maps.set("banana",200);
console.log(maps);
let getting = maps.get("banana");
console.log(getting);
// has method
console.log(maps.has("apples"));
maps.delete("apples")
console.log(maps);

// try catch error
//type error
let num = 20;
try{
    number.toUpperCase();
}
catch(err){
    console.log(err.message)
    console.log(err.name)
console.log(err.stack);
}
// Reference error
try {
    aler("hello world");
}
catch(err){
    console.log(err.message)
    console.log(err.name)
console.log(err.stack);
}
// type of error names 
// 1 eval error
// 2 range error
 num = 2;
 try{
    num.toPrecision(500);
 }
 catch(err){
    console.log(err.message)
    console.log(err.name)
console.log(err.stack);
 }
//  REFERENCE  ERROR
num = 2;
 try{
num = m + 1;
 }
 catch(err){
    console.log(err.message)
    console.log(err.name)
console.log(err.stack);
 }
//  STNTAX ERROR
try{
    eval("hello world");
     }
     catch(err){
        console.log(err.message)
        console.log(err.name)
    console.log(err.stack);
     }
    //    URI ERROR
    try{
       decodeURI("%%%")
         }
         catch(err){
            console.log(err.message)
        console.log(err.name)
    console.log(err.stack);
         }
         console.clear()
// JAVASCRIPT STRICT MODE 
try{

    function myFunc3(){
        "use strict";
        hey = 20;
    }
    myFunc3()
}
catch(err){ console.log(err.stack)
console.log(err.name);
}
try{
    "use strict";
    obj = {
    name: "jenna",
    age: 19
}
console.log(obj)
}
catch(err){ console.log(err.stack)
console.log(err.name);
}
try{
    "use strict"
delete obj;
console.log(obj)
}
catch(err){ console.log(err.stack)
console.log(err.name);
}
try{
    "use strict"
delete obj;
console.log(obj)
}
catch(err){ console.log(err.stack)
console.log(err.name);
}
 "use strict";

 const person2 = {
 fName : "john",
 lName : "Doe",
 age : 30,
 fullName : function(){
    return (this.fName + " " + this.lName);
 }
 }
console.log(person2.fullName);
console.log(person2.fullName.call(person2));
console.log(person2.fullName.call(person2,"kenric","lemmar"));

 class Cars {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date =  new Date();
        return date.getFullYear() - this.year;

    }
}
const myCar = new Cars("ford","2014");
console.log(myCar.year);
console.log(myCar.name);
console.log(myCar);
const myCar2 = new Cars("mercedez","1999");
console.log(myCar2.year);
console.log(myCar2.name);
console.log(myCar2);

const myCar3 = new Cars("Bugatti","2009");
console.log(myCar3.year);
console.log(myCar3.name);
console.log(myCar3.age());
console.log(myCar3);

// class inheritance
class Cars2 {
    constructor(brand){
        this.cname = brand;
    }
    age(){
        const date =  new Date();
        return date.getFullYear() - this.year;
    }
    present(){
        return "I have a " + this.cname ; 
    }
}
class Model extends Cars2 {
    constructor(brand,mod){
super(brand);
this.model = mod;
    }
    show(){
        return this.present(), " It is a " + this.model ;
    }
}
let myCar4 = new Model("ford","mustary");

console.log(myCar4.show());

// create a getter and setter 
class Cars3 {
    constructor(brand){
     this.cname = brand;
    }
    get carname(){
        this.cname;
    }
    set carname(x){
        this.cname = x;
    }
}
const myCar5 = new Cars3("ford");
console.log(myCar5.cname);
// js static
class Cars4 {
    constructor(name){
        this.name = name;
    }
    static hello(){
        return "hello";
    }
}
console.log(Cars4.hello()); // NB: accessing static method does not  goes with mycars.hello*() using variables to access objects

//JSON ARRAY AND OBJ
const  json = '{"employees":[' +
 '{ "firstName" : "john","lastName" : "jonh"}, ' + 
 '{ "firstName" : "Anna","lastName" : "Smith"}, ' + 
 '{ "firstName" : "peter","lastName" : "Jones"}]}';
 const obj2 = JSON.parse(json);
 console.log(obj2.employees[1].firstName + ' ' + obj2.employees[1].lastName);
 console.log(obj2.employees[0].firstName + ' ' + obj2.employees[0].lastName);
 console.log(obj2.employees[2].firstName + ' ' + obj2.employees[2].lastName);

//JSON  ARRAYS containing Null,Boolean,Number,String but JSON can never store undefined, function and Dates 
const  json2 = '{"employees":["hello",true,36,null]}';
 const obj3 = JSON.parse(json2);
 console.log(obj3.employees[2]);
 console.log(obj3.employees[1]);
 console.log(obj3.employees[3]);

//  BOM Browser object model
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.orientation);
console.log(screen.pixelDepth);
console.log(location.protocol);
console.log(location.href);
console.log(location.hostname);
console.log(location.host);
console.log(location.pathname);
console.log(navigator.cookieEnabled);
console.log(navigator.platform);
console.log(navigator.javaEnabled);
console.log(navigator.appCodeName);
console.log(navigator.onLine);
console.log(navigator.language);
// popup boxes 
// console.log(alert("hello"));
// console.log(prompt("hello"));
// console.log(confirm("hey"));
// let text2 ;
// if (confirm("press a button !")){
//     text2 = "you passed ok!";
// } else {
//     text2 = "you passed cancel";
// }
// console.log(text2);
//javasript timing  timing events 
//go to index.html

//js clock 
const setTime = () => {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
   s = checkTime(s);
    console.log( h + ":" + m + ":" + "s");
    setTimeout(setTime, 1000);
}
setTime();
function checkTime(i){
if (i < 10 ) {i = "0" + i}
    return i;
}

//JAVASRIPT COOKIES 
let cookie = document.cookie = "username = John Doe; expires= thu, 3 Jan 2024 12:00:00 UTC; path=/users";
console.log(cookie);
 cookie = document.cookie = "username = John smith; expires= thu, 3 Jan 2024 12:00:00 UTC; path=/users";
console.log(cookie);
 cookie = document.cookie = "username =; expires= thu, 3 Jan 1997 12:00:00 UTC; path=/users";
console.log(cookie);

//Geolocation API
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }  else {
        console.log("No geolocation");
     }
}
getLocation();
function showPosition(position){
    let colong = position.coords.longitude;
    let colat = position.coords.latitude;
}
//showPosition();

//javasript validation APi
function myFunc4(){

    let input = document.getElementById('id1');
    if (!input.checkValidity()){
        document.getElementById('demo4').innerHTML = input.validationMessage;
    } else {
        document.getElementById('demo4').innerHTML = "input OK";
    }
}
//the above function got overridden 
function myFunc4(){

    let input = document.getElementById('id1');
    if (!input.checkValidity()){
        document.getElementById('demo4').innerHTML = input.rangeOverflow;
    } else {
        document.getElementById('demo4').innerHTML = "input OK";
    }
}

//web history API
//go to index.html

//web storage API
localStorage.setItem("name", "Jonh Doe");
let getItem = localStorage.getItem("name");
console.log(getItem);
localStorage.setItem("name", "john Snow");
 getItem = localStorage.getItem("name");
console.log(getItem);
//learnt difeerence btw the two
localStorage.setItem("name", "kairat Bello");
 getItem = localStorage.getItem("name");
console.log(getItem);
localStorage.setItem("name", "Gbolahan Bello");
 getItem = localStorage.getItem("name");
console.log(getItem);

//Web worker API
function startWorker(){
    if (typeof(w) == "undefined")
{
    w =new worker("index.js");
}w.onmessage 
functii
}
// freecodecamp functional programmimg
//lesson 1
 const prepareTea = () => "greenTea";
const getTea = (numOfCups) => {
    const teaCups = [];
    for(let cups = 1; cups <= numOfCups; cups += 1){
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}
const team4FreeCodeCamp = getTea(10);
console.log(team4FreeCodeCamp);
//lesson 2
// function that returns a string representing a cup of green tea 
const prepareGreenTea = () => "greenTea";
//function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

const getTea2 = (prepareTea, numOfCups) => {
    const teaCups2 = [];
    for(let cups =1; cups <= numOfCups; cups += 1){
        const teaCup2 = prepareTea();
        teaCups2.push(teaCup2);
    }
    return teaCups2;
}
const team4GreenFreeCodeCamp = getTea2(prepareGreenTea,5);
const team4BlackFreeCodeCamp = getTea2(prepareBlackTea,8);
console.log(team4GreenFreeCodeCamp);
console.log(team4BlackFreeCodeCamp);

//lesson 3
//the global variable
let fixedValue =  4;
const incrementer = () => {
    return fixedValue + 1;
}
console.log(incrementer());

//lesson4 pass arguments to avoid external dependence in a function
 
fixedValue = 10;
const incrementer2 = (value) => {
return value + 1;
}
console.log(incrementer2(fixedValue));

console.clear();

// intermidiate javascript at freecodecamp
//1 sum all numbers in one array
function sumAll(arr){
    let sumBetween = 0;
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sumBetween += i;}
        return sumBetween;
}
console.log(sumAll([1,4,8]))

//2 diff two arrays
const diffArray = (arr1, arr2) => {
return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}
console.log(diffArray([2,40,5,7,9], [1,2,3,4,5]));

//3 seek and destroy
const destroyer = (arr) => {
    const valsToRemove = Array.from(arr).slice(1);
    return arr.filter(function(val){
return !valsToRemove.includes(val);
    })
}
console.log(destroyer([1,2,3,1,2,3], 2,3))

// 4. wherefore art thou
function whatIsInName(collection,source) {
    const collectionMatches = [];
    for(let i = 0; i < collection.length; i++) {
        let foundMismatch = false;
        for (const sourceProp in source){
            if (collection[i][sourceProp] !== collection[i][sourceProp]){
                foundMismatch = true;
            }
        }
        if (!foundMismatch){
            collectionMatches.push(collection[i]);
        }
    }
    return collectionMatches;
}
console.log(
    whatIsInName([
        {first: "Romeo", last : "Morgan"},
        {first: "M1", last : "Morgan"},
        {first: "Romeo", last : "Morgan"},
        {first: "Romeo", last : "Morgan"}
    ])
)

// 5 spinal tap case 
const  spinalCase = (str) => {
//create variable for white space and underscore

var regEx = /\s+_+/g;
//replace low-upper cxase to low-space-underscore
str = str.replace(/([a-z])([A-Z])/g,"$1 $2");
//replacing space and underscore with -
return str.replace(regEx, "-").toLowerCase()
}

console.log(spinalCase('This is Spuinal Tap'));

//6 pig latin 
function translatePigLatin(str) {
    var pigLatin = "";
    var regex = /[aeiou]/gi;
    if(str[0].match(regex)) {
        pigLatin = str + "way";
    } else if (str.match(regex) === null){
    pigLatin = str + "ay";
    } else {
        var vowelIndice = str.indexOf(str.match(regex)[0]);
        pigLatin = str.substr(vowelIndice) +  "ay";
    }
    return pigLatin;
}
console.log(translatePigLatin("consonant"));

//7 search and replace

// String.prototype.capitalize = String.prototype.capitalize || function() {
//     return this[0].toUpperCase() + this.slice(1);
// }
// const Util = (function(){
//     function textCase(str,tCase){
//         if(tCase) {
//             return setCase(str,tCase);
//         } else {
//             return getCase(str,tCase);
//         }
//         function setCase(str,tCase){
// switch(tCase) {
//     case "uppercase":
//         return str.toUpperCase();
//         case "lowercase":
//             return str.toLowerCase();
//             case "capitalize":
//                 return str.capitalize();
//                 default:
//                     return str
// }
//         }
//         function getCase(str) {
//             if (str === str.toUpperCase()) {
//                 return "uppercase";
//             }
//             if (str === str.toLowerCase()) {
//                 return "lowercase";
//             }
//             if (str === str.capitalize()){
//                 return "capitalized";
//             }
//             return "normal";
//         }

//     }
//     return {
//         textCase
//     };
// }) ();

// function myReplace(str, before, after) {

//     const { textCase } = Util;
//     const regex = new RegExp(before, "gi");
    
//     const replacingStr = textCase(after,textCase(before));
    
//     return str.replace(regex, replacingStr);
// }

// console.log( myReplace("A quick brown fox jumped over the lazy dog"));


//8 DNA pairing

// function pairElement(str){
//     const matchWithBasePair = function(char){
//         switch (char){
// case "A":
//     return ["A", "T"];
//     case "T" :
//         return ["T", "A"];
//         case "C": 
//         return ["C", "G"]; 
//         case "G" : 
//         return ["G", "C"];
//         }
//     };
//     const pairs = [];

//     for (let i =0;  str.length > 0; i++) {
//         const pairs = [];
//  pairs.push(matchWithBasePair(str[i]));
//     }
//     return pairs;
// }

// console.log(pairElement("GCG"));



//certification project freecodecamp
//1 roman numeral
function convertToRoman(num) {
    var str = '';
    str += num;
    var result = [];
    var res1 = '';
    var res2 = '';
    var res3 = '';
    var res4 = '';
    if (str.length == 0){
        result = [];
    } else if (str.length > 0){
switch(str[str.length - 1]){
case "1":
    res1 = "I";
    break;
    case "2":
 res1 = "II";
 break;
 case "3":
res1 = "III";
 break; 
case "4":
res1 = "IV";
    break; 
    case "5":
    res1 = "V";
    break; 
    case "6":
        res1 = "VI";
        break; 
        case "7":
            res1 = "VII";
            break; 
            case "8":
    res1 = "VIII";
    break;    
    case "9":
    res1 = "IX";
    break;             
}
switch (str[str.length-2]){
    case "1":
        res2 = "X";
        break;
        case "2":
    res2 = "XX";
    break;
    case "3":
    res2 = "XXX";
    break;
    case "4":
    res2 = "XL";
    break;
    case "5":
    res2 = "L";
    break;
    case "6":
    res2 = "LX";
    break;
    case "7":
        res2 = "LXX";
        break;
        case "8":
    res2 = "LXXX";
    break;
    case "9":
    res2 = "XC";
    break;
}
switch(str[str.length-3]){
    case "1":
        res3 = "C";
        break;
        case "2":
 res3 = "CC";
 break;
case "3":
res3 = "CCC";
break;
case "4":
     res3 = "CD";
    break;  
    case "5":
        res3 = "D";
        break;
        case "6":
             res3 = "DC";
             break;   
            case "7":
                 res3 = "DCC";
                break;   
                case "8":
                     res3 = "DCCC";
                    break;   
                    case "9":
                        res3 = "CM";
                        break; 
}
switch (str[str.length-4]){
    case "1":
res3 = "M";
break;
case "2":
res3 = "MM";
break;
case "3":
res3 = "MMM";
break;
}
    }
    result.push(res4,res3,res2,res1);
    return result.join("");
}
console.log(convertToRoman(39999));

//caesars cipher
function rot13(str) {
    var cracker = {
        A: "N",B: "O",C: "P",D: "Q",E: "R",F: "S",G: "T",H: "U",
        I: "V",J: "W",K: "X", L: "Y",M: "Z",N: "A",O: "B", P: "C",
        Q: "D",R: "E",S: "F",T: "G",U: "H",V: "I",W: "J",X: "K",Y: "L",Z: "M", " ": " ",
        "!": "!","?": "?"

    }
return str.split("").map(char => cracker[char]).join("");
}
console.log(rot13("SERR PBQR PNZC!")) //THIS RETURNS FREE CODE CAMP!

//TELEPHONE NUMBER VALIDATOR
function telephoneCheck(str){
    let regex1 = /^(1\s?)\d{3}([-\s]?)\d{3}\2\d{4}$/,
        regex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
        if (regex1.test(str)){ 
            return true
        }else {
            return regex2.test(str) ? true : false
        }
}
console.log(telephoneCheck("555-555-5555"));

// palindrone checker 
function palindrone(str){
    str= str.toLowerCase().replace(/[\W_]/g, '');
    for (var i = 0, len = str.length -1; i < len/2; i++){
        if(str[i] !== str[len-i]) {
return false 
        }
    }
    return true
}
console.log(palindrone("eye"))

// cash register
