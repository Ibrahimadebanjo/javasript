a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible
if (true){
    var gravity = 9.81 // note if you use var it is assecible outside the block but if let won't be accessible
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3
  function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    const  gravity = 9.81
    console.log(gravity) // 9.81
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  for(let i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  // console.log(i), Uncaught ReferenceError: i is not defined

  //Objects 
const rectangle = {
    length:20,
    width:20
}
console.log(rectangle);
const person = {
firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills : [
    "HTML",
    'CSS',
    "Javascript",
    "React",
    "Node"
  ],
 "is maried": true,
  myFunction : () => {
    return person.skills // can not use this keyword
  },
  getFullName : () => {
    return `${person.firstName} ${person.lastName}`
  },
  'phone number': '+3584545454545',
  getFullName2: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(person.myFunction());
console.log(person.getFullName())
// accessing object properties either with brackets or dot notation
console.log(person["is maried"]) //bracket notation is more useful when there is spaces in obj properties
// for instance to access the phone number we only use the square bracket method
console.log(person['phone number']);
console.log(person.getFullName2());
// Note if you use arrow function you won't be able to use this key word cox it'll be undefined maybe name of th obj when using arrow function

// creating a new key for an object
// using dot notation and push method to an array
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
// person.isMarried = true;
person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return(
        statement
    ) 
  }
  console.log(person)
  console.log(person.getPersonInfo())
//NB:when using this keyword use template literals instead of quotes
//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
//1. Object.assign  assign properties of an object to a variable;
 const copyPerson = Object.assign({}, person);
 console.log(copyPerson);
// 2. Object.keys_: To get the keys or properties of an object as an array with no values;
console.log(Object.keys(copyPerson));
console.log(Object.keys(copyPerson.skills));
//3. Object.values: To get the values of properties of an object as an array with properties;
console.log(Object.values(copyPerson));
console.log(Object.values(copyPerson.getFullName));
//Object.entries_:To get the keys and values  of an object in an array
console.log(Object.entries(copyPerson));
//_hasOwnProperty_: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("city"));
console.log(Object.hasOwnProperty("lastName"));

