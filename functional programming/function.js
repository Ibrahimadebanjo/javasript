// creating a function without adding arguments or parameters
let sumFunct = () => {
let num = 2;
sum = num + num;
console.log(sum);
}
sumFunct();
let multiplyFunct = () => {
    let num = 10;
    multiply = num * num;
    console.log(multiply);
    }
    multiplyFunct();

    const printFullName = () => {
        let firstName = "Ibrahim";
        let lastName = "Adebanjo";
        let fullName = firstName + " " + lastName;
        console.log(fullName);
    }
    printFullName();
    //Function returning value
    const printFullName2 = () => {
        let  firstName = "Ibrahim";
        let lastName = "Adebanjo";
        let middleName = "Owolabi"
        let fullName = firstName + " " + lastName + " " + middleName;
        return fullName;
    }
    console.log(printFullName2());
    const addTwoNumbers = () =>{
        num1 = 20;
        num2 = 10;
        sum = num1 + num2;
        return sum;
    }
    console.log(addTwoNumbers());
    //Function with a parameter
    function areaOfCircle(r) {
        let area = Math.PI * r * r
        return area // NB area = PI r square 
      }
      console.log(areaOfCircle(20))
      const square = (x) => {
        return x * x;
      }
      console.log(square(20));
      function sumTwoNumbers(numOne, numTwo) {
        let sum = numOne + numTwo
        console.log(sum)
      }
      sumTwoNumbers(10, 20) // calling functions
      // If a function doesn't return it doesn't store data, so it should return
      const printFullName3 = (firstName, lastName,middleName) => {
        return `${firstName} ${lastName} ${middleName} `
      }
      console.log(printFullName3("Ibrahim", "Adebanjo", "Owolabi"));
      //Function with many parameters
const sumArrValues = () => {
    let sum = 0;
    for (const num of numbers ){
 sum = num + num ;
    }
    return sum;
}
let numbers = [1,3,4,5,6,7,8,7];
console.log(sumArrValues(numbers));
// function with multiple parameters
// function functionName(parm1, parm2, parm3,...){
 //code goes here
//   }
//   console.log(functionName(1,3,4,...))
//Function with unlimited number of parameters

function sumAllNums() {
    console.log(arguments)
  }
  
  sumAllNums(1, 2, 3, 4);
//using for of loop
  function sumAllNums2() {
    let sum = 0;
    for(const agrs of arguments)[
    sum += agrs
    ]
    return sum;
  }
  
 console.log( sumAllNums2(1, 2, 3, 4))
 // or using for loop
 function sumAllNums3() {
    let sum = 0;
    for(i=0; i< arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
  }
  
  console.log(sumAllNums3(1, 2, 3, 4,7,60));
  //Unlimited number of parameters in arrow function
  const addAllNums = (...args) => {
    console.log(args)
  }
  addAllNums(1,2,3,4,6,7,9);
  //function declaration
  const addAllNums2 = (...args) => {
    sum = 0;
    for (const num of args){
        sum += num;
    }
    return sum;
  }
  console.log(addAllNums2(1,2,3,4,6,7,9));

  // Anonymous Function
  const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
  }
  anonymousFun();
  //Expression Function
  const square2 = function(n) {
    return n * n
  }
  
  console.log(square2(2));
  //Self Invoking Functions
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum);
  //Arrow Function
  const printFullName4 = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName4('Asabeneh', 'Yetayeh'));
  //You can omit the return statement but to do that the code must be in only in one line;
  //Note with  no parentheses
  const printFullName5 = (firstName, lastName) => { `${firstName} ${lastName}` }; //undefined
  console.log(printFullName5("React.js", "Next.js"));
  const printFullName6 = (firstName, lastName) => `${firstName} ${lastName}` ; //undefined
  console.log(printFullName6("React.js", "Next.js"));

  //Function with default parameters

//  syntax
// function functionName(param = value) {
//     console.log(value);
//   }
  
//   // Calling function
//   functionName()
//   functionName(arg)
function functionName(param = 20) {
  console.log(param);
  }
  
  // Calling function
  functionName()
  functionName(90);
  const greetings = (name = "Ibrahim💻") => {
    let greet = `Hi ${name}, Welcome to 30 Days of Javascript Code!!`
    return greet;
  }
  console.log(greetings());
  console.log(greetings("Asabeneh"));

  function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))
  
  const calculateAge = (BirthYear = 2001 , currentYear = 2024, ) => {
    let age = currentYear -  BirthYear;
    return age; 
  }
  console.log(calculateAge())
  console.log(calculateAge(1990));
  const calculateAge2 = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge2(1819));

const linearEqn = (a, b, c) => {

    let eval = 0;
    eval = (b * y) - c + (b * y) + c ;
 return y ;
}
console.log(linearEqn(1,7,12));




