/****************** FUNCTIONS ASSIGNMENTS EXAMPLE #1 ******************/

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
