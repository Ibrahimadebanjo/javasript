//desturctions
const numbers = [1, 2, 3, 4];
let [one, two, three, four] = numbers;
console.log(one, two, three, four);
const names = ["james", "IBR", "Asabeneh"]
let [firstName, secondName, thirdName] = names 
console.log(firstName, secondName, thirdName);
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

let val ={
    "e" : e,
    "pi" : pi,
    "gravity" : gravity,
    "bodyTemp" : bodyTemp,
    "boilingTemp" : boilingTemp

}
console.log(e,pi,gravity, bodyTemp, boilingTemp);
console.log(val);
const fullStalk = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
let [frontEnd, backEnd] = fullStalk;
console.log(frontEnd,backEnd);
//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
const numbers2 = [1, 2, 3]
let [numOne, , numThree] = numbers2 //2 is omitted

console.log(numOne, numThree);
const names2 = ['Asabeneh', 'Brook', 'David', 'John'];
let [ , secondPerson, ,fouthPerson] = names2
console.log( secondPerson, fouthPerson)
 const names3 = [undefined, 'John', "wick"];
 let [
    firstPerson1 = "IBR",
    secondPerson1,
    thirdPerson1,
    fouthPerson1 = "Oliva"
 ] = names3
 console.log(firstPerson1,secondPerson1,thirdPerson1,fouthPerson1);
 const nums = [1,2,4,5,65,6,7,8,9,9,];
 let [num1,num2,num3, ...rest] = nums;
 console.log(num1,num2,num3);
 console.log(rest);
 const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
 for (const [country, city] of countries) {
    console.log({country, city });
 }
 for (const [first, second, third] of fullStalk){
    console.log([first, second, third]);
 }
 //When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
 const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area: a, perimeter: p } = rectangle
  
  console.log(w, h, a, p);
  console.log(w, h, a, p = 80);
  //If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration.
  const rectangle2 =
  {
    width2: 20,
    height2: 10,
    area2: 200,
    perimeter2: 90
  }
  let {width2, height2, area2, perimeter2 = 30} = rectangle2;// 30 here is a default value incase of returning undefined
  console.log(width2, height2, area2, perimeter2);
  //Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.
  const rect = {
    width : 20,
    height : 10
    }
    const calc = rectangle => {
        return 2 * (rectangle.width + rectangle.height)
    }
    console.log(calc(rect));

    const person = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        age: 250,
        country: 'Finland',
        job: 'Instructor and Developer',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Redux',
          'Node',
          'MongoDB',
          'Python',
          'D3.js'
        ],
        languages: ['Amharic', 'English', 'Suomi(Finnish)']
      }

      const getPersonInfo = obj => {
        const skills = obj.skills
        const formattedSkills = skills.slice(0, -1).join(', ')
        const languages = obj.languages
        const formattedLanguages = languages.slice(0, -1).join(', ')
      
        personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
          obj.age
        } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
          skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
      
        return personInfo
      }
      
      console.log(getPersonInfo(person));
      //Object parameter with destructuring
      const getPersonInfo2 = ({
        firstName,
        lastName,
        age,
        country,
        job,
        skills,
        languages
      }) => {
        const formattedSkills = skills.slice(0, -1).join(', ')
        const formattedLanguages = languages.slice(0, -1).join(', ')
      
        personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
          skills[skills.length - 1]
        }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
      
        return personInfo
      }
      console.log(getPersonInfo2(person));

      const todoList = [
        {
          task:'Prepare JS Test',
          time:'4/1/2020 8:30',
          completed:true
        },
        {
          task:'Give JS Test',
          time:'4/1/2020 10:00',
          completed:false
        },
        {
          task:'Assess Test Result',
          time:'4/1/2020 1:00',
          completed:false
        }
        ]
        for (const {task, time, completed} of todoList){
            console.log(task, time, completed);
        }
       // When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

       // ### Spread operator to get the rest of array elements
        
       
        const countries2 = [
          'Germany',
          'France',
          'Belgium',
          'Finland',
          'Sweden',
          'Norway',
          'Denmark',
          'Iceland'
        ]
        
        let [gem, fra, , ...nordicCountries] = countries2
        
        console.log(gem)
        console.log(fra)
        console.log(nordicCountries);
//Spread operator to copy array
const evens = [2,3,4,6];
let [...even] = evens;
console.log(even);
const odds =[1,3,5,7,9];
let [...odd] = odds;
console.log(odd);
console.log(` Whole numbers = ${odd}, ${even}`);
// Spread operator to copy object
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
let {...copyUser} =   user;
console.log(copyUser);
//Modifying or changing object while ciopying
let copiedUser = {...user, title : "instructor"};
console.log(copiedUser);
const allNums = (...args) => {
    console.log(args)
}
allNums(1,2,3,4,5);
const sumAllNums = (...args) => {
    let sum = 0;
    for (const num of args){
        sum += num
    }
    return sum
}
console.log(sumAllNums(1,2,4,5,6,7,8,5))
