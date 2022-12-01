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




/* ############  INTRODUCTION TO ARRAY EXERCISE #1 ############  */


/*  COMMENT START

const country = ["India", "US", "Italy", "Japan"];
const populations = [14, 10, 12, 7];
console.log(populations.length === 4);
console.log(populations);


const percentageOfWorld1 = function(populations) { // generic function
 return (populations / 7200) * 100; 
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];


console.log(percentages);
console.log(`${country[0]} has ${percentages[0]}% of the world population`)
console.log(`${country[1]} has ${percentages[1]} of the world population`);
console.log(`${country[2]} has ${percentages[2]} of the world population`);
console.log(`${country[3]} has ${percentages[3]} of the world population`);



COMMENT END */



/* ############  BASIC ARRAY OPERATIONS (METHODS) EXERCISE #1 ############  */


/* COMMENT START


const neighbours = ["India", "Pakistan", "China"];

console.log(neighbours);
console.log(neighbours.length === 3);

neighbours.push("Nepal");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("SriLanka")) {
  console.log(`SriLnka, Probably not a cental european country :D`);
}

const changNeighbConty = neighbours[neighbours.indexOf("Pakistan")] = "Afghanistan";


console.log(`This country ${changNeighbConty} has changed from this Pakistan`);
console.log(neighbours);



COMMENT END */



/* ############ CODING CHALLENGE #2 ############  */


/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �

*/

/*  COMMENT START



// No: 1
const calcTip = function(bill) {
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
 
// 0.15 is 15% and 0.2 is 20%

// the result of these ternary operator is one of these values. So either bill times 15 or times 20. So that's gonna be the result of this operator and that's what the function will be return

}

// we can use the arrow function also
// const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// No: 2
const billName = ["Adarsh", "Aditya", "Nitesh"];
const bills = [125, 555, 44];


// No: 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// No: 4

// const totalBills = bills + tips // simply not work, because we cannot do any operations on arrays like this

const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalBills);

// we can show the result in the string using backticks or template literals by using expression

console.log(`${billName[0]} bill was ${bills[0]}, the tip was ${tips[0]} and the total value is ${totalBills[0]}`)
console.log(
  `${billName[1]} bill was ${bills[1]}, the tip was ${tips[1]} and the total value is ${totalBills[1]}`
);
console.log(
  `${billName[2]} bill was ${bills[2]}, the tip was ${tips[2]} and the total value is ${totalBills[2]}`
);


// usually in an array I like to give a plural names bills, tips



COMMENT END */




/* ############  INTRODUCTION TO OBJECT ASSIGNMENT EXERCISE #1 ############  */


/*
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/



/* COMMENT START



const myCountry = {
  country: "India",
  capital: "Delhi",
  language: ["Hindi", "Marathi",  "Gujarati", "Punjabi", "Bengali"],
  population: 1400000000,
  neighbours: ["Pakistan", "China", "Nepal", "SriLanka"]
};

console.log(`${myCountry.country} is a country, ${myCountry.capital} is the capital of ${myCountry.country}. In ${myCountry.country} there are many language spoken like ${myCountry.language}. ${myCountry.country} population is ${myCountry.population}. ${myCountry.country} is sorrounded by ${myCountry.neighbours.length} neighbour countries such as ${myCountry.neighbours}.`);



COMMENT END */



/* ############  DOT VS BRACKET NOTATION EXERCISE #1 ############  */


/* 
1. Using the object from the previous assignment, log a string like this to the
console: 'Your country has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called your state.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.

*/


/* COMMENT START


console.log(
  `${myCountry.country} has ${myCountry.population} million population, ${myCountry.language[0]}- speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`
);

myCountry.population += 20000000;
console.log(myCountry.population);

console.log(
  `${myCountry.country} has ${myCountry.population} million population, ${myCountry.language[0]}- speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`
);


myCountry["population"] -= 20000000;
console.log(myCountry.population);

console.log(
  `${myCountry.country} has ${myCountry.population} million population, ${myCountry.language[0]}- speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`
);



COMMENT END */



/* ############  OBJECT METHODS EXERCISE #1 ############  */



/*
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/


/*  COMMENT START


const myCountry = {
  country: "India",
  capital: "Delhi",
  language: ["Hindi"],
  population: 1400000000,
  neighbours: ["china", "pakistan", "srilanka", "nepal"],

  describe: function() {
  return `${this.country} has ${this.population} million population, ${this.language[0]}- speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`;
  },

  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false
  }

};


console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry);


COMMENT END */



/* ############ CODING CHALLENGE #3 ############  */


/*
Let's go back to Adarsh and Shubh comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Adarsh Tripathi and Shubh Tripathi)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "Adarsh's BMI (28.3) is higher than Shubh's (23.9)!"
Test data: Adarsh weights 78 kg and is 1.69 m tall. Shubh weights 92 kg and is 1.95 m
tall.
*/



/* COMMENT START



const adarsh = {
  fullName: "Adarsh Tripathi",
  mass: 78,
  height: 1.69,

  // step 1

  calcBMI: function() {
   this.bmi = this.mass / this.height ** 2;
   return this.bmi;

  }

}


const shubh = {
  fullName: "Shubh Tripathi",
  mass: 92,
  height: 1.95,

  //step 2

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height); // same as mass / height ** 2
    return this.bmi;
  },

  // Because this method here doesn't call itself we need to explicitly call it
};


// I am first calculation this value then I am doing adarsh.bmi which was added here in this method call.

adarsh.calcBMI();   //  of course without this method call adarsh.bmi value would not available

console.log(adarsh.bmi);  // 27.309968138370508

shubh.calcBMI();
console.log(shubh.bmi); // 24.194608809993426



// step 3 

// "Adarsh's BMI (28.3) is higher than Shubh's (23.9)!"

if(adarsh.bmi > shubh.bmi) {
  console.log(
    `${adarsh.fullName}'s BMI (${adarsh.bmi}) is higher than ${shubh.fullName}'s BMI (${shubh.bmi})`
  );
} else if (shubh.bmi > adarsh.bmi){
 console.log(
   `${shubh.fullName}'s BMI (${shubh.bmi}) is higher than ${adarsh.fullName}'s BMI (${adarsh.bmi})`
 );
}




COMMENT END */




/* ############  ITERATION: THE LOOP ASSIGNMENT EXERCISE #1 ############  */

/*
There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting
*/

/* COMMENT START


for (let i = 1; i <= 50; i++ ) {
  
  console.log([i], typeof [i]);
  console.log(`Voter number ${i} is curretly voting.`)
}


COMMENT END */



/* ############ LOOPING ARRAYS, BREAKING AND CONTINUING STATAMENT - ASSIGNMENT EXERCISE #1 ############  */


/*
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is

*/

/* COMMENT START


const country = ["india", "us", "china", "pakistan"]
const population = [1400000000, 1000000000, 1200000000, 700000000];
const worldPopulation = 7200000000;

const percentage2 = []; // empty array for computing and filling data dynamically

const percentageOfWorld7 = (population) => (population / worldPopulation) * 100;

for (let i = 0; i < population.length && i < country.length; i++) {
  const perc = percentageOfWorld7(population[i]) 
  percentage2.push(perc); // computed array

  console.log(
    `${country[i]}'s population is ${percentage2[i]}% of the world's population i.e. ${worldPopulation}`
  );

}

console.log(percentage2);


COMMENT END */



/* ############ LOOPING BACKWARDS AND LOOPS IN LOOPS - ASSIGNMENT EXERCISE #1 ############  */


/*

1. Store this array of arrays into a variable called 'listOfNeighbours'
[["China", "Pakistan"], ["Nepal"], ["SriLanka, Afghanistan"],["US", "Russia"]];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: China' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway �

*/

/* COMMENT START

const listOfIndNeighbours =
 [["China", "Pakistan"], ["Nepal"], ["SriLanka, Afghanistan"],["US", "Russia"]];


for (let i = 0; i < listOfIndNeighbours.length; i++) {
 for (let y = 0; y < listOfIndNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfIndNeighbours[i][y]}`);
 }
};


COMMENT END */



/* ############ THE WHILE LOOP - ASSIGNMENT EXERCISE #1 ############  */


/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/


const country = ["india", "US", "china", "pakistan"];
const population = [1400000000, 1000000000, 1200000000, 700000000];
const worldPopulation = 7200000000;

const percentage2 = [];

const percentageOfWorld7 = function(population) {
return (population / worldPopulation) * 100;
}

let i = 0;
while (i < population.length && country.length) {
 const perce = percentageOfWorld7(population[i]);
 percentage2.push(perce);
  console.log(
    `${country[i]}'s populations is ${percentage2[i]}% of the world population's`
  );
 i++;
}


console.log(percentage2);























