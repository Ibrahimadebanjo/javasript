// For loop structure
//for(initialization, condition, increment/decrement) {
    // code goes here
 // }
for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(i=5; i >= 0; i--){
    console.log(i);
}
for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`);
}
const countries = ['Finland','Sweden', 'Denmark', 'Norway', 'Iceland']
let newArr = []
// Relating this
newArr.push(countries[0].toUpperCase())
console.log(newArr)
for( let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr); //NB countries[i] = countries[0]
let numbers = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < numbers.length; i++)
{
    sum += numbers[i];
}
console.log(sum); 
 numbers = [1, 2, 3, 4, 5]
 sum = 0;
 newArr = []
 for(i = 0; i < numbers.length; i++){
    newArr.push(numbers[i] ** 2)
 }
 console.log(newArr);
 //While loop
  i = 0;
while (i <= 5) {
  console.log(i)
  i++;
};
//DO while loop
var i = 0;
do {
  console.log(i)
  i++
} while (i < 10)
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.
//for of loop
numbers = [1,2,3,4,5]
for (const num of numbers) {
    console.log(num)
  }
  
  let arr = ["hello", "how are you doing?"];
  for (const array of arr) {
    console.log(array);
  }
for (const num of numbers ){
    console.log(num ** num);
}
for (const num of numbers ){
    sum += num;
}

console.log(sum); // 15

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  for (const tech of webTechs){
console.log(tech.toUpperCase());
  }
  for (const tech of webTechs){
    console.log(tech[0]);
      }
      for (const tech of webTechs){
        console.log(tech.length);
          }

for(const country of countries){
            newArr.push(country.toUpperCase())
}
console.log(newArr)

//break and continue key word 
for(let i = 0; i <= 5; i++){
    if(i == 3){
     break;
    }
    console.log(i)// 012
  };
  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue;
    }
    console.log(i)// 12345
  }

  let nums = [1,2,3,4,5,6,7,8,9,10,11,12];
  let multiply = []
  for (const num of nums){
      multiply.push(num * num) ;
  }
  console.log(multiply)

  nums2 = [1,2,3,4,5,6,7,8,9,10,11,12];
let multiply2 = []
for (const num of nums2){
    multiply2.push(num ** num) ;
}
console.log(multiply2);
//challenged passed NB: remember using for of loops to solve challenges

