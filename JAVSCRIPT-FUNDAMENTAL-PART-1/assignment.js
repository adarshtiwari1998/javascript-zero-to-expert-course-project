/*

// Variable and Value

let country = "India";
let continent = "Asia";
let population = 1400000000;

console.log(country, continent, population);

// Data Type

let isIsland = true;
console.log(isIsland);
console.log(typeof isIsland);
let language;
console.log(language);
console.log(typeof language);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

*/

/*

language = "Hindi";
// console.log(language);

const country = "India";
const continent = "Asia";
const isIsland = false;

isIsland = true; // assignment type error to constant variable

console.log(country, continent, isIsland);

*/


// OPERATOR CODING CHALLENGES
// let language = "Hindi";
// let country = "India";
// let continent = "Asia";

// let population = 100000;
// console.log(population / 2);
// population++;
// console.log(population);

// const finland = 60000000;
// console.log(population > finland);

// console.log(population < 3300000);

// const description = 
// country + 
// ' is in ' +
// continent +
// ', and its ' +
// population + 
// ' million people speak ' +
// language;
// console.log(description)


// OPERATOR PRECEDENCE CODING CHALLENGE 2


/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. 
*/


////////// TEST DATA 1

// STEP 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// // STEP 2
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// // STEP 3
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);


/////////// TEST DATA 2

// STEP 1
// const massMark1 = 95;
// const heightMark1 = 1.88;
// const massJohn1 = 85;
// const heightJohn1 = 1.76;
// // STEP 2
// const BMIMark1 = massMark1 / heightMark1 ** 2;
// const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
// // STEP 3
// const markHigherBMI1 = BMIMark1 > BMIJohn1;
// console.log(BMIMark1, BMIJohn1, markHigherBMI1);


// TEMPLATE LITERALS CODING CHALLENGE
let language = "Hindi";
let country = "India";
let continent = "Asia";

let population = 100000;
console.log(population / 2);
population++;
console.log(population);

const finland = 60000000;
console.log(population > finland);

console.log(population < 3300000);

const description = `
${country} is in ${continent} and its ${population} million people speak ${language}
`
console.log(description)







