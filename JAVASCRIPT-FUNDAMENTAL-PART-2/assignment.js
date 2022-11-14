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
