let js = "amazing";
// if (js === "amazing");
// alert("JavaScript is Fun");
// 40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10); // here all mathematical operator and values and join this to make single value

console.log("Adarsh"); //So here Adarsh is the value
console.log(23); // so here 23 is the value, so here we pass the literal value

/* VARIABLE DECLARATION IN JAVASCRIPT */

let firstName = "Shubh"; //here firstName is the variable and Adarsh is the value, so here we use this variable name multiple times in our code
console.log(firstName);
console.log(firstName);
console.log(firstName);

/* CONVENTION AND RULES FOR NAMING VARIABLE */
// We should'n gives random names in variables

/* 1. Camel Case  > this is the kind of standard of how javaScript works but still the otherwase for naming variable */
// let firstName = "Adarsh";
let first = "Adarsh";
let firstNamePerson = "Adarsh"   // subsequent letter written in uppercase under variable name

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
let $new = 33;  // this variable name is allow because we start the variable name with dollor sign
let name = "Adarsh"; // this variable name is allow but it causes some problem because [name] is a convention and it is not a legal so we start the name as firstName like this
//let firstName = "Adarsh";

// let Person = "Adarsh"; // this variable name is allow but again it is a convention and it is not a legal it is just that we use this kind of variable name with an uppercase letter for specific usecase in javascript which is object oriented programming. For now never do this but insted we should write like this 
let person = "Adarsh"; 

let PI = 3.1415;  // this value are constant so this are never change, so here are the convention of writing this in uppercase. So real constand writing in uppercase like this

let myFirstJob = "Coder";
let myCurrentJob = "Freelancer";  // this approach is lot better and looks clean to understand about your job status

let job1 = "Programmer";
let job2 = "Freelancer";  // this approach is only showcase your job you are doing


/* WHAT IS VARIABLE ?
  Its is a box which is actually store a value. So we gives us a box name and into that box we can store a value. And later in the code we can reference this variable over and over again. For Example
*/

console.log(myFirstJob);
