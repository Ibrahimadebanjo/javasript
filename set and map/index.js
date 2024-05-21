//Creating an empty set
let companies = new Set();
console.log(companies)
//Creating set from array
const languages =[
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]
let newSetLanguages = new Set(languages);
console.log(newSetLanguages);
//iterating throught sets
for(const lang of newSetLanguages){
    console.log(lang);
}
//Adding an element to a set

console.log(companies.size) // 0
//adding item to a set
companies.add("Amazon");
companies.add("Google");
companies.add("Microsoft");
companies.add("LinkedIn");
console.log(companies.size);
for(const company of companies  ) {
    console.log(company)
}
//using loop to add element to set 
console.log(companies);
let emptyCompanies = new Set();
for (const comapany of companies) {
    emptyCompanies.add(comapany);
}
console.log(emptyCompanies);
//Deleting an element a set
companies.delete("Microsoft");
console.log(companies);
console.log(companies.has("Microsoft"));
console.log(companies.has("Facebook"));
console.log(companies.has("Google"));
//Clear a set elements
console.log(emptyCompanies);
emptyCompanies.clear();
console.log(emptyCompanies)
//other exmaples on how to use a set 
let langSet = new Set(languages);
console.log(langSet);
console.log(langSet.size);

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts);
const numbers = [1,13,94,9,5,88,4,76,477,4,9,3];
let numberSet = new Set(numbers );
console.log(numberSet);
// Union of sets
let a = [1,3,5,6];
let b = [4,5,7,2];
let B = new Set(b);
let A = new Set(a);
let C = a.filter((num) => B.has(num));
console.log(new Set(C));
//Difference of sets
 C = a.filter((num) => !B.has(num));
 console.log(new Set(C));

 //Map
 const map = new Map()
console.log(map);
// Creating an Map from array
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
let countriesMap = new Map(countries);
console.log(countriesMap);
let  arr = [
["hello", false],
["name", null]
]// the array must be in form fo entry object when using Map
let arrMap = new Map(arr);
console.log(arrMap);
//Adding values to the Map using set() which will take two parameters(diff DT) to fit entry object format
console.log(arrMap.set("age", 22));
console.log(arrMap.set("Education", "[No Name]"));
console.log(arrMap.get("Education"));
console.log(arrMap.get("name"));
//check for a key in a Map
console.log(countriesMap.has("Sweden"));
//iterating through a Map
for (const country of countries ){
    console.log(country)
}
for (const [country, city] of countriesMap){
    console.log(country, city)
   }

