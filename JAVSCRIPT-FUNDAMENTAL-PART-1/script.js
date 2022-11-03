let js = "amazing";
// if (js === "amazing");
// alert("JavaScript is Fun");
// 40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10); // here all mathematical operator and values and join this to make single value

console.log("Adarsh"); //So here Adarsh is the value
console.log(23); // so here 23 is the value, so here we pass the literal value

/****************** VARIABLE DECLARATION IN JAVASCRIPT ******************/

let firstName = "Shubh"; // here firstName is the variable and Adarsh is the value, so here we use this variable name multiple times in our code
console.log(firstName);
console.log(firstName);
console.log(firstName);

/* CONVENTION AND RULES FOR NAMING VARIABLE */
// We should'n gives random names in variables

/* 1. Camel Case  > this is the kind of standard of how javaScript works but still the otherwase for naming variable */
// let firstName = "Adarsh";
let first = "Adarsh";
let firstNamePerson = "Adarsh"; // subsequent letter written in uppercase under variable name

/* Other ways for naming variable */
let first_name_person = "Adarsh"; // this ways for naming variable is very popular in other language like Ruby

/* Some conventions and hard rules for not writing variable in this form like */
// let 3years = 3;     // variable name cannot start with the numbers
// console.log(3years);

// Note: variable name can only contain numbers, letters, underscore and the dollar sign
// let Adarsh&Tiwari = "Adarsh";  // this will be not allowed'
let Adarsh$tiwari = "Adarsh"; // this will be allowed

/* Error coming when we try to declare variable with reserved javascript keywords like */
//let new = 27; // error coming because new is the reserved keyword in javascript
let $new = 33; // this variable name is allow because we start the variable name with dollor sign
let name = "Adarsh"; // this variable name is allow but it causes some problem because [name] is a convention and it is not a legal so we start the name as firstName like this
//let firstName = "Adarsh";

// let Person = "Adarsh"; // this variable name is allow but again it is a convention and it is not a legal it is just that we use this kind of variable name with an uppercase letter for specific usecase in javascript which is object oriented programming. For now never do this but insted we should write like this
let person = "Adarsh";

let PI = 3.1415; // this value are constant so this are never change, so here are the convention of writing this in uppercase. So real constand writing in uppercase like this

let myFirstJob = "Coder";
let myCurrentJob = "Freelancer"; // this approach is lot better and looks clean to understand about your job status

let job1 = "Programmer";
let job2 = "Freelancer"; // this approach is only showcase your job you are doing

/* WHAT IS VARIABLE ?
  Its is a box which is actually store a value. So we gives us a box name and into that box we can store a value. And later in the code we can reference this variable over and over again. For Example
*/

console.log(myFirstJob);

/******************  DATA TYPE IN JAVASCRIPT ******************/

// boolean is the value that can only be true or false

// true;
// console.log(true); // we can also store a boolean in variables

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
