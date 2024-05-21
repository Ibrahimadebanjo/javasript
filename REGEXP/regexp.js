// REGULAR EXPRESSIONS AT FREECODECAMP
//syntax = /regex/g.test(string); only for test
// var  ignoreCaseStr = "freeCodeCamp";
// var ignoreRegex = /code/;
// console.log( ignoreRegex.test(ignoreCaseStr));
let testStr = "freeCodeCamp";
console.log(/Code/.test(testStr));
let testRegex = /Code/;
console.log( testRegex.test(testStr));
console.log(/code/.test(testStr)); // ignoreCase test
console.log(/code/i.test(testStr)); //case insensitive or different possibilities test
console.log(/code/g.test(testStr)); // case sensitive test
//MAtch methiod used to extract strings 
var ignoreCaseStr = "is this freeCodeCamp or w3schools or vscode ";
console.log(ignoreCaseStr.match(/code/ig)); 
let ibStr = "JennY2456789098765"; // note i flag finds only once while g finds multiplr times 
// let ibRegEx = /[a-z0-9]/g;
// console.log(ibStr.match(ibRegEx));
console.log(ibStr.match(/[a-z0-9]/g))// find more than first match
console.log(ibStr.match(/[a-z0-9]/i))// find only once for the match
console.log(ibStr.match(/[a-z0-9]/gi))// this returns everything despite the whole search
console.log(ibStr.length);
//wildcard
let huStr = "hug huh hut";
console.log(/hu./.test(huStr)); // retruns true and goes with only test never match
let huStr2 = "fun,sun,pun,nun,bun";
console.log(/.un/.test(huStr2)); // retruns true and goes with only test never match
// match all characters that are not specified 
ibStr = "A B C D E F G H  I J K L M N O P Q R S T U V W X Y Z";
 ibRegEx = /[^AEIOU]/gi; // ^ matches character not specified
console.log(ibStr.match(ibRegEx));
 let huStr3 = "big,bag,bug";
console.log(huStr3.match(/b[uai]g/));//this is xter classes group of xter in [] to macth 
let huStr4 = "cat";
let huStr5 = "bat";
console.log(/[a-e]at/.test(huStr5));
console.log(huStr4.match(/[a-e]at/gi));  
// matching characters that occurs more than one times
ibStr = "hello can we light up the candle but oooops no matches";
console.log(ibStr.match(/o+p/ig));
console.log(/o+g/gi.test(ibStr));
//  match characters that occur zero or more times 
let football = "goooooooooooooooooal!!"
let gPhrase = "gut feeling ";
let oPhrase = " over the moon";
let goRegex = /go*/gi;
console.log(football.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
// match the begining string patterns using caret character(^)
let rukkyStr = "Rukky is the first and can b found";
 let nRukkyStr = "hello jane, the sentence does not start with Rukky";
 ibRegEx = /^Rukky/;
console.log(ibRegEx.test(rukkyStr));
console.log(ibRegEx.test(nRukkyStr));
// lazy matching using  ? character
let tphrase = "titanic";
console.log(tphrase.match(/t[a-z]*i/)); 
console.log(tphrase.match(/t[a-z]?i/)); //lazy matching using ? 
let zPhrase = "zzzzzzzzzzzzzzzjdjjhj3yirrrrrrrrrrrrg2igg8gg" ;
console.log(zPhrase.match(/z+/));
console.log(zPhrase.match(/r+/));
console.log(zPhrase.match(/g+/));
// match ending string patterns using dolaror anchor characeter ($)
rukkyStr = "Rukky is the first and can be found"; // false 
nRukkyStr = "hello jane, the sentence does not start with Rukky"; // true
console.log(/Rukky$/.test(rukkyStr));
console.log(/Rukky$/.test(nRukkyStr));
// match all letters and numbers with \w (lowecase); which is same as [A-Za-z0-9]
let numAndAlph = "12567890876543jahtttwreghyuyuyuwye(){}  !!!"
let numAndAlphRegex = /\w/g;
console.log(numAndAlph.match(numAndAlphRegex));
// match everything except all letters and numbers with \W uppercase same as [^A-Za-z0-9]
 numAndAlph = "12567890876543jahtttwreghyuyuyuwye(){}  !!!"
 numAndAlphRegex = /\W/g;
console.log(numAndAlph.match(numAndAlphRegex));
// match all numbers using \d lowercase 
numAndAlph = "12567890876543jahtttwreghyuyuyuwye(){}  !!!"
console.log(numAndAlph.match(/\d/g));
// match all except numbers using \D uppercase 
numAndAlph = "12567890876543jahtttwreghyuyuyuwye(){}  !!!"
console.log(numAndAlph.match(/\D/g));
//for password /^[a-z] [a-z]+\d*$|^[a-z]\d\d+$/i;
// match white space using lowercase \s
numAndAlph = "1256 789 087654 3ja htttwr   eghyuyuyuwye(){}  !!!"
 numAndAlphRegex = /\s/g;
console.log(numAndAlph.match(/\s/g));
// match all but except white space using uppercase \S
numAndAlph = "1256 789 087654 3ja htttwr   eghyuyuyuwye(){}  !!!";
console.log(numAndAlph.match(/\S/g));
// specify quantity of xters upper and lower number of matches using {x,y}
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(A4.match(/a{1}/i));
console.log(A4.match(/a{3}/i));
// specify only lower numbers  to test note it must be followed by a comma 
 A4 = "haaaah";
 A2 = "haah";
 let A100 = "h" + "a".repeat(100) + "h";
 multipleA = /ha{4,}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(multipleA.test(A100));
// specify the exact or specific number of matches  to test
A4 = "haaaah";
A2 = "haah";
A100 = "h" + "a".repeat(100) + "h";
multipleA = /ha{100}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(multipleA.test(A100));
// check for all or none using question mark operator (?)
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));
//  positive and negative lookahead  with ?=... and ?!... respectively
let quit = "qu";
let noQuit = "qt";
console.log(quit.match(/q(?=u)/)); // make sure item is there but never match +ve lookahead 
console.log(quit.match(/q(?!u)/)); // make sure item is not there but never match -ve lookahead 
// advance usage of lookahead password checker between 3 and 6
let password = "abc123";
console.log(/(?=\w{3,6})(?=\D*\d)/.test(password)); //true
//check fior mixed grouping 
let group = "pumpkin";
console.log(/pu(dkigjhtkhfhrmpk)in/gi.test(group));
//use capture group to search and replace 
let wrongText = "The sky is silver";
console.log(wrongText.replace(/silver/, "Blue"));
