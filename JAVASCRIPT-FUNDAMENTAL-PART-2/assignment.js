/* ############ FUNCTIONS ASSIGNMENTS EXAMPLE #1 ############*/

/*

function describeCountry(country, population, capitalCity) {
  // console.log(country, population, capitalCity);

  const countryData = `${country} has ${population} million people and its capital city is ${capitalCity}`;

  return countryData;
}

// calling a function, invoking a function

const descIndia = describeCountry("India", 1400000000, "Delhi\n");

const descAmerica = describeCountry("America", 20000000, "Washington, D.C.\n");

const descUnitedKindom = describeCountry(
  "United Kingdom",
  131313333,
  "London \n"
);

console.log(descIndia, descAmerica, descUnitedKindom);


*/

/* ############  FUNCTION DECLARATIONS VS. FUNCTION EXPRESSIONS ASSIGNMENTS EXAMPLE #1 ############*/

/*

function percentageOfWorld1(population) { // generic function
// const calculatePopulation = population / 7830000000;
const calculatePercentage1 = (population / 7830000000) * 100;
return calculatePercentage1;
}

const percIndia = percentageOfWorld1(1400000000);
// const popuIndia = percentageOfWorld1();
const percAmerica = percentageOfWorld1(1313);
const percItaly = percentageOfWorld1(313);

const result = `India has 14 million people, and its about ${percIndia} of the world population`;
console.log(result);

console.log(percIndia, percAmerica, percItaly);

// function expression

const percentageOfWorld2 = function (population) {
    return (population / 7830000000) * 100;
};

const percIndia1 = percentageOfWorld2(1400000000);
const percAmerica1 = percentageOfWorld2(331900000);
const percItaly1 = percentageOfWorld2(313);

const result1 = `America has 34 million people, and its about ${percAmerica1} of the world population.`

console.log(result1);

*/

/* ############  ARROW FUNCTION EXAMPLE #1 ############  */

/*

const percentageOfWorld3 = (population) => (population / 7830000000) * 100;

// console.log(percentageOfWorld3(10031313));

// const descpercOfWorld3 = percentageOfWorld3(1400000000);
// console.log(descpercOfWorld3);

const result1 = percentageOfWorld3(1400000000);

const descpercOfWorld3 = `India has 14 million people and its about ${result1} of the world populaiton..`;
console.log(descpercOfWorld3);

*/

/* ############ FUNCTIONS CALLING OTHER FUNCTIONS EXAMPLE #1 ############  */

/*

function percentageOfWorld1(population) { // generic function
// const calculatePopulation = population / 7830000000;
const calculatePercentage1 = (population / 7830000000) * 100;
return calculatePercentage1;
}

const describePopulation = function (country, population) {
  const calcPopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people and is about ${calcPopulation} of the world population.`;
}

console.log(describePopulation("India", 1400000000))

*/


/* ############ CODING CHALLENGE #1 ############  */

/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �

*/

/*

const calcAverage = (a, b, c) => (a + b + c) / 3; // this is basically a generic function just to calculate the values of any three numbers;
console.log(calcAverage(3,4,5));


//TEST 1
let scoreDolphins = calcAverage(44,23,71); // these need to be let variables so thet we can reassign them. Const value cannot be mutated, they cannot be changed, so they need to be let
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas); // in this case koalas score is higher than the dolphins but it's not double so in this case no team should be win


const checkWinner = function (avgDolphins, avgKoalas) {
  
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas})
    `);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win the trophy ${avgKoalas} vs. ${avgDolphins}`);
    } else {
      console.log("No team wins........");
    }

    return;
}

// calling the function, invoking the function
checkWinner(scoreDolphins, scoreKoalas);

// this checkwinner function here is also completely independent of these score value that we calculated earlier. So here we can simply call this function with completely different values. It is standalone function, add it is doesn't care at all where it is values comes from, so we can just plug in some random numbers here and then call it

// checkWinner(444, 888);


*/

/* 
It is important to keep in mind, that these function are all independent from others. It is not mandatory to call the value we just calculated before in checkWinner function. Any other values will work just as well.
*/


/*

// TEST 2

// and here ofcourse we need to get rid of the let, because we do not want to create new variable, we just want to overwrite, so we want to reassign
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);


*/