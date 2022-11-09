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

// const description = `
// ${country} is in ${continent} and its ${population} million people speak ${language}
// `
// console.log(description)



// IF / ELSE STATEMENT CODING CHALLENGE 

// const country = "India";
// const population = 140;

// if (population > 33) {
//   console.log(`${country} Population is above average`)
// } else {
//   console.log(`${country} population is ${33 - population} million below average`)
// }

// Coding Challenge #2

/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Adarsh's BMI is higher than Shubh!" or "Shubh BMI is higher than Adarsh!"
2. Use a template literal to include the BMI values in the outputs. Example: "Adarsh's
BMI (28.3) is higher than Shubh's (23.9)!"
Hint: Use an if/else statement �
 */

// IF / ELSE STATEMENT CODING CHALLENGE #2

/////////// PART 1
// TEST DATA 1

// const massAdarsh = 78;
// const heightAdarsh = 1.69;
// const massShubh = 92;
// const heightShubh = 1.95;
// // STEP 2
// const BMIAdarsh = massAdarsh / heightAdarsh ** 2;
// const BMIShubh = massShubh / (heightShubh * heightShubh);
// // STEP 3
// // const markHigherBMI = BMIAdarsh > BMIShubh;
// // console.log(BMIAdarsh, BMIShubh, markHigherBMI);
// console.log(BMIAdarsh, BMIShubh);

// if (BMIAdarsh > BMIShubh) {
//   // it is very common to write the condition directly
//   console.log(`Adarsh's BMI ${BMIAdarsh} is higher than Shubh! ${BMIShubh}`);
// } else {
//   console.log(`Shubh BMI ${BMIShubh} is higher than Adarsh's! ${BMIAdarsh}`);
// }

// // TEST DATA 2

// const massAdarsh1 = 95;
// const heightAdarsh1 = 1.88;
// const massShubh1 = 85;
// const heightShubh1 = 1.76;
// // STEP 2
// const BMIAdarsh1 = massAdarsh1 / heightAdarsh1 ** 2;
// const BMIShubh1 = massShubh1 / (heightShubh1 * heightShubh1);
// // STEP 3
// // const markHigherBMI1 = BMIMark1 > BMIJohn1;
// // console.log(BMIMark1, BMIJohn1, markHigherBMI1);
// console.log(BMIAdarsh1, BMIShubh1)
// if (BMIAdarsh1 > BMIShubh1) {
//   // it is very common to write the condition directly
//   console.log(`Adarsh's BMI (${BMIAdarsh1}) is higher than Shubh! (${BMIShubh})`);
// } else {
//   console.log(`Shubh BMI (${BMIShubh1}) is higher than Adarsh's! (${BMIAdarsh})`);
// }


// TYPE CONVERSION AND TYPE COERCION CHALLENGE
/*

let typeConversion1 = "9" - "5";
console.log(typeConversion1); // output is 4

let typeConversion2 = "19" - "13" + "17";
console.log(typeConversion2); // output is 617

let typeConversion3 = "19" / "13" + "17";  
console.log(typeConversion3); // output is 1.46148461538461517

let typeConversion4 = "123" < 57;
console.log(typeConversion4); // output is false

let typeConversion5 = 5 + 6 + "4" + 9 - 4 - 2;
console.log(typeConversion5); // output is 1143

*/


// EQUALITY OPERATOR ASSIGNMENTS

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// console.log(numNeighbours);
// console.log(typeof numNeighbours);

// if (numNeighbours === 1) { // loose equality operator
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 borders");
// } else {
//   console.log("No borders");
// }


/////////////// LOGICAL OPERATORS ASSIGNMENTS CHALLENGE

// const country = "India";
// const language = "hindi";
// const population = "130";
// const isIsland = false;

// if (language === "hindi" && population < 140 && !isIsland) {
//   console.log(`You should live in ${country} `)
// } else {
//   console.log(`${country} does not meet your criteria`)
// };


//////////////// LOGICAL OPERATORS CODING CHALLENGE #3

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
 */


// const scoreDolphins = (96 + 108 + 89) / 3; // to calculate the average we simply add up all the score and then divided by three
// const scoreKoalas = (88 + 91 + 110) / 3; // grouping has higher precedence so we group all this for first calculation

// // const scoreAverage = scoreDolphins + scoreKoalas;

// console.log(scoreDolphins, scoreKoalas); // they are pretty close but dolphins has little bit higher of an average so that's what we're working on in the point 2

// // compare the team's average score

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🥇");
// } // as of now first condition is get's true right away, so this block of code is executed
// else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy 🥇")
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!")
// }  // we can also use else block here but no matter this is also okay


// // BONUS 1

// const scoreDolphins1 = (97 + 112 + 86) / 3; // to calculate the average we simply add up all the score and then divided by three
// const scoreKoalas1 = (109 + 95 + 86) / 3; // grouping has higher precedence so we group all this for first calculation
// console.log(scoreDolphins1, scoreKoalas1);

// if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) { // in this case dolphins wins, but in this case we also ensure that the dolphins have a score higher or equal 100
//   console.log("Bonus 1: Dolphins win the trophy 🥇");
// } // as of now first condition is get's true right away, so this block of code is executed
// else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) { // once more we use the logical operator here to modal the situation essentially
//   console.log("Bonus1: Koalas win the trophy 🥇")
// } else if (scoreDolphins1 === scoreKoalas1 && scoreDolphins1 >= 100 && scoreKoalas1 >= 100) {
//   console.log("Bonus 1: Both win the trophy!")
// }  // we can also use else block here but no matter this is also okay
// else {
//   console.log("No one wins the trophy 😟")
// }


// draw only happens if both teams have the same score and both score greater or equal to 100 points

/* 
const scoreDolphins = (96 + 108 + 126) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

// compare the team's average score

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy")
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy")
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both team is win!")
} else {
console.log("No one win")  
}

*/















