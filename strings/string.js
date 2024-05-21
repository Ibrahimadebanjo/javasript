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
console.log(str.length);
console.log(str.slice(-10,-6));
 console.log(str.substring(3,-9));
 console.log(parseInt("400", 10));
 console.log(parseFloat(3.14));
 console.log(parseFloat(12827474724787277477277272747274n));
 console.log(parseFloat(Infinity));
 const arr = [ "french",  , "korean  indonesia", 'japanese', + "spanish",];
 console.log(arr.length);
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