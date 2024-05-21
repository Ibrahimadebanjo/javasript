//Arrays
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
// converting an array to a string using tostring method 
console.log(cars.toString());
 // accessing full array by calling the name
console.log(Date());
// array methods 
console.log(cars.length);
console.log(cars.sort());
// last element in aan array
console.log(cars[cars.length -1] );
// looping through an array

for(i=0; i<cars.length; i++){
        console.log(cars[i] );
}
// adding array element 
const fruitJuice = [];
console.log(fruitJuice.push("orange","lemmon","pineapple","apple"));
 console.log(fruitJuice);
let text = "<ul>";
for (let i = 0; i < fruitJuice.length; i++) {
    text += "<li>" + fruitJuice[i] + "</li>";
}
text += "</ul>";
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
fruitJuice.splice(2,1, "pea","carrot");
//splice(addd new items to an array) 1st arg position and 2nd arg how many to be removed
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
 // function for finding min value in an array of numbers
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
// includes() methods
console.log(fruits.includes("mangoes"));
// combining array with spread operator
 let thisArr = ["sage","rosemary", "jessica", "thyme"];
 let thatArr = ["basil","orange","mangoes", ...thisArr, "whale"];
 console.log(thatArr);
 //iterate through an array
 function greaterThan10(arr){
 let newArr = [];
 for(i=0; i<arr.length; i++){
    if(arr[i] > 10){
        newArr.push(arr[i]);
    }
}
return newArr;
 }
console.log(greaterThan10([1,49,5,93,85,7,87,82,7,84]));
// multiple dimentional array
let nestedArr =[["deep"],
[["deeper"],["deeper"]],
[
    [["deepest"], ["deepest"]]
]
];
console.log(nestedArr[2][0][1]);

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


