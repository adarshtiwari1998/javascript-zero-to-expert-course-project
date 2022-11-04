/*

let js = "amazing";
// if (js === "amazing");
// alert("JavaScript is Fun");
// 40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10); // here all mathematical operator and values and join this to make single value

console.log("Adarsh"); //So here Adarsh is the value
console.log(23); // so here 23 is the value, so here we pass the literal value

*/

/****************** VARIABLE DECLARATION IN JAVASCRIPT ******************/

/* 

let firstName = "Shubh"; // here firstName is the variable and Adarsh is the value, so here we use this variable name multiple times in our code
console.log(firstName);
console.log(firstName);
console.log(firstName);

*/

/* CONVENTION AND RULES FOR NAMING VARIABLE */
// We should'n gives random names in variables

/* 1. Camel Case  > this is the kind of standard of how javaScript works but still the otherwase for naming variable */
// let firstName = "Adarsh";

/*

let first = "Adarsh";
let firstNamePerson = "Adarsh"; // subsequent letter written in uppercase under variable name

*/

/*

Other ways for naming variable */
/* let first_name_person = "Adarsh"; // this ways for naming variable is very popular in other language like Ruby

*/

/* Some conventions and hard rules for not writing variable in this form like */
// let 3years = 3;     // variable name cannot start with the numbers
// console.log(3years);

// Note: variable name can only contain numbers, letters, underscore and the dollar sign
// let Adarsh&Tiwari = "Adarsh";  // this will be not allowed'

/*

let Adarsh$tiwari = "Adarsh"; // this will be allowed

*/

/* Error coming when we try to declare variable with reserved javascript keywords like */
//let new = 27; // error coming because new is the reserved keyword in javascript

/* 

let $new = 33; // this variable name is allow because we start the variable name with dollor sign
let name = "Adarsh"; // this variable name is allow but it causes some problem because [name] is a convention and it is not a legal so we start the name as firstName like this

*/

//let firstName = "Adarsh";

// let Person = "Adarsh"; // this variable name is allow but again it is a convention and it is not a legal it is just that we use this kind of variable name with an uppercase letter for specific usecase in javascript which is object oriented programming. For now never do this but insted we should write like this

/* 

let person = "Adarsh";

let PI = 3.1415; // this value are constant so this are never change, so here are the convention of writing this in uppercase. So real constand writing in uppercase like this

let myFirstJob = "Coder";
let myCurrentJob = "Freelancer"; // this approach is lot better and looks clean to understand about your job status

let job1 = "Programmer";
let job2 = "Freelancer"; // this approach is only showcase your job you are doing


*/

/* WHAT IS VARIABLE ?
  Its is a box which is actually store a value. So we gives us a box name and into that box we can store a value. And later in the code we can reference this variable over and over again. For Example
*/

/* 

console.log(myFirstJob);

*/

/******************  DATA TYPE IN JAVASCRIPT ******************/

// boolean is the value that can only be true or false

// true;
// console.log(true); // we can also store a boolean in variables

/*

let javaScriptIsFun = true; //variable declartion should be happen before the log because javscript programs are executed from top to bottom
console.log(javaScriptIsFun); //here we created a nice and descripted a variable name holding a boolean value Note: a value that holds a datatype and not a variable because i could now actually go and change this to value to a anothe type.

// SPECIAL OPERATOR - typeof (it is likely a plus and minus operator to actually show a type of value
console.log(typeof true); // result of using this operator here on a value will be a new value which is a string with a type of this value here

// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Adarsh"); // we always use the quotes in order to create a strings

// DYNAMIC TYPING - means we can easily change the type of a value that is hold by the variable

javaScriptIsFun = "YES!"; // we simply assign a new value here of already existing variable

// first time we declare a new variable we need to do it using let but then we want to change the value of that variable we simply write did again like this but without the let

console.log(typeof javaScriptIsFun);

// Number, strings, booleans are the mostly used datatype

// UNDEFINED DATA TYPE - value taken by a variable that is not yet defined

let year;
console.log(year);
console.log(typeof year); // whenever we can declare a empty variable the value of the variable will be undefined and the typeof the variable is also undefined

// reassign the variables like this

year = 1998;
console.log(year);
console.log(typeof year);

// error in typeof in javascript
console.log(typeof null); // typeof null is an object not undefined it is an error in javascript and this doesn't make any sence at all so this is regarded as a bug in javasript, however this bug is never corrected for legacy reasons. But null is not a object is should be return a null as undefined.

*/

/******************  3 DIFFERENT WAYS OF DECLARING VARIABLE IN JAVASCRIPT ******************/

// 1.
// we use let keywords to declare a variable that can change later, means during the execution of the program

/*

let age = 24;
age = 25; // reassigning the value to a variable, we mutate the age variable in this case. That the term you will hear all the time in the javaScript world, So when we need the mutate a variable, that the perfect use case for using let. And that also counts for the case that we want to declare empty variable.
console.log(age);


// we use const keyword to declare a variable that are not supposed to change at any ppint in the future, So the value in the const variable cannot be changed.

// 2.
const birthYear = 1998;
// birthYear = 1999;.  // it should not work, we get type error, it is an immutable variable, So a variable that cannot be mutated.
console.log(birthYear);


// We cannot declare empty const variables

// const job; // when using const, we need basically an initial value
// console.log(job)

// The best practice to writing clean code, I always recommend to use const by default and let when you are really sure that the variable needs to change at some point in the future. For exampe birthYear that is never supposed ti change so you should alwayse use const.

// Good practice to have a litle variable mutation or variable changes as possible. Because chaning variables introduces a potential to create bugs. SO basically errors in the code. So again by defualt alwayse just use const and let when you sure the that value of the variable needs to change at some point in your code. Declaring variable as const ways as much as possible.

// 3. Var Keyword

// but this one should actually be completely avoided. However we should know how it works for legacy reason, you see this in the older code basis or some older tutorials.

// var is basically old way of defining variables prior to ES6. It works as pretty much as same as let

var job = "Coder";
job = "Consultant"; // it basically allowed to mutate this job variable when we use var keyword.

console.log(job);

// Although the var and let looking similar but below the surface they're actually pretty different. Also there are many differences between let, const, var

// let is blocked scoped and var is function scoped

// we should basically never use var

lastName = "Tripathi"; // javascript will happily execute this script even without us declaring a variable, However this is actually a pretty terrible idea because it does'nt create a variable in the current so-called scope. Instead javascript will create a property on the global object. We should alwayse properly declare a variables. Never write this variable like this without really declaring it
console.log(lastName);

*/

/******************  OPERATORS IN JAVASCRIPT ******************/

// MINUS OPERATOR TO SOLVE A VERY SIMPLE PROBELM OF AGE CALCULATOR

//////////////// MATH OPERATOR

/*

const now = 2037;

const ageAdarsh = now - 1991;  // we can use the variables to stop the repetitive value by using variable
const ageShubh = now - 2018
console.log(ageAdarsh, ageShubh);

console.log(ageAdarsh * 2, ageAdarsh / 10, 2 ** 3);  // here we are creating two value , and here we are using exponitation operator

// 2 ** 2 means 2 to the power of 3 = 2 * 2 * 2

// PLUS OPERATOR


const firstName = "Adarsh";
const lastName = "Tripathi";

console.log(firstName + ' ' + lastName);  // concatenation of strings which is called template strings

// TYPEOF OPERATOR

const isCountry = true;

console.log(typeof isCountry);  // it given the type of the value

/////////////////////// ASSIGNMENT OPERATOR

let x = 10 + 5; // this equal = sign is itself a operator, here we have the two operator, plus and equal operator, in this case x will be assigned 15 because plus operator is executed before the assignment operator. That's based on couple of rules about operator proceedings. So at this point x is 15

x += 10;  // x = x + 10, [output is 25], so here we are reassigning the x value, So thats why we are using the let keywords here

x *= 4; // x = x * 4, so the output will be [100]

x++; // x = x + 1, output is 101

x--; // x = x - 1, output is 100
x--; // x = x - 1, output is 99

console.log(x); // Output shown here


////////////////// COMPARISON OPERATORS 

// we use comparison operators to produce boolean values.

console.log(ageAdarsh > ageShubh); // ageAdarsh is either greater than ageShubh or not, and if it greater than the result if this should be true, and if it's not than the resukt should be just false, Indeed the result of this will be true, So it is basically asking the operator, and the operator is essentially reply with yes or no, yes means true or no means false.

// it is very useful later when we start taking decisions with our code based on conditions like this

//  > , <, >=, <=

//console.log(ageShubh >= 18); // greater than equal to operator

// we can also store these result in the variable if you need them later in our code

const fullAge = ageShubh >= 18;

console.log(now - 1991 > now - 2018); // how javascript knows that if it should do the math first ot if it should do the comparison first

*/


// const now = 2037;

// const ageAdarsh = now - 1991; // we can use the variables to stop the repetitive value by using variable
// const ageShubh = now - 2018;
// // console.log(ageAdarsh, ageShubh);

// console.log(now - 1991 > now - 2018);  // minus precendence is higher than greater than precedence, so minus operator is run first and after greater than operator

// console.log(25 - 10 - 5) // precedence from left to right 

// let x, y; // value undefined

// x = y = 25 -10 - 5  // minus is higher precedence so it actually work from left to right, so after minus operation we actually ended with x = y = 10, x = 10, right to left precedence
// console.log(x, y);

// GROUPING OPERATOR

// const averageAge = (ageAdarsh + ageShubh) / 2; // grouping precedence is higher than divide
// console.log(ageAdarsh, ageShubh, averageAge)


/******************  STRINGS AND TEMPLATE LITERALS JAVASCRIPT ******************/

const firstName = "Adarsh";
const job = "coder";
const birthYear = 1999;
const year = 2022;

const bio =  // we use + sign to concanate a string
"I'm " + firstName +
', a ' + (year - birthYear) +
' years old ' + job + '!';
console.log(bio)

// ES6 - template literals assemble multiple pieces into one final strings


const bioNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // this is much easierw way to writing a string
console.log(bioNew); 

// Now we kow how template strings works in javascript, especially in ES6

console.log(`We can use backticks for any regular strings....`); // we can use backticks for any regular strings by not adding any of these placeholder like this ${}


// Great use case for using template literals is to create multi line strings


// multi line strings before ES6 so we have to write like this
console.log('String with \n\ multiple \n\ lines')

// but with template strings after ES6 we can easily do
console.log(`String
with 
multiple
line
`)  // it is very useful to create multi line html elements to insert them onto a page dynamically.

// whenever you need a multi line strings always use the template literals becoz it is lot cleaner






