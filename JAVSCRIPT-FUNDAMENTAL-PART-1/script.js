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


/******************  STRINGS AND TEMPLATE LITERALS IN JAVASCRIPT ******************/

// const firstName = "Adarsh";
// const job = "coder";
// const birthYear = 1999;
// const year = 2022;

// const bio =  // we use + sign to concanate a string
// "I'm " + firstName +
// ', a ' + (year - birthYear) +
// ' years old ' + job + '!';
// console.log(bio)

// // ES6 - template literals assemble multiple pieces into one final strings


// const bioNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // this is much easierw way to writing a string
// console.log(bioNew); 

// // Now we kow how template strings works in javascript, especially in ES6

// console.log(`We can use backticks for any regular strings....`); // we can use backticks for any regular strings by not adding any of these placeholder like this ${}


// // Great use case for using template literals is to create multi line strings


// // multi line strings before ES6 so we have to write like this
// console.log('String with \n\ multiple \n\ lines')

// // but with template strings after ES6 we can easily do
// console.log(`String
// with 
// multiple
// line
// `)  // it is very useful to create multi line html elements to insert them onto a page dynamically.

// // whenever you need a multi line strings always use the template literals becoz it is lot cleaner.


/******************  IF / ELSE STATEMENTS IN JAVASCRIPT ******************/


// EXAMPLE 1 

/*

const licenseAge = 19;
// const isOldEnough = licenseAge >= 18;

if (licenseAge >= 18) {
   console.log("Adarsh, 😊 you are eligible for taking driving license 🚗...");
}
else { // this else block is optional, javscript is takes you to next line after the if statement in case that the condition is false
  const yearsLeft = 18 - licenseAge;
  console.log(
    `"Sorry! 😔 Adarsh, you are not eligible for taking driving license ❌. Wait another ${yearsLeft} years :)"`
  );
}

*/

// if else statement is the most important things in programming. we take decisions with code all the time which is essentially what we did here, so we can execute certain parts of our program based on certain conditions.


// if else structure is also called the control structure. And it is called a control structure because this structure actuallu allows us to have more control over the way that our code is executed.

// the whole code does not execute in  a linera way, so javscript does not execute all of this code in a linearly. Instead we can now control blocks of code that should execute and blocks that should not execute.

// And again that gives us a lot more control over how our code works and that's why is called a control structure



// EXAMPLE 2
/// let's create a variable conditionally and not use console.log

/*

const birthYear = 1920;

let century;

if (birthYear <= 1900) {
    century = 19;
} else if (birthYear <= 2000) {
  century = 20;
} else {  // else block is actually be optional, so if you don't have any else block then simply no code will be executed.
  century = 21;
}

console.log(century);

*/



/******************  Type Conversion and Coercion ******************/

// In javascript there is type conversion and type coercion there are sound similar but are different

// Type conversion is when we manuaLly convert from one type to another on the other hand type coercion when javascript automatically converts types behind the scene from us, that necessary from some situation but it happens implicitly, completely hidden from us.


// TYPE CONVERSION - when we explicitly want to convert from one type to another.


/*

const inputYear = "1991"; // input fields usually coming comes as strings, the input fields coming from the user interface is a string with the value 1991, but now we can do some calculations with this but they don't really work
console.log(inputYear + 18); // output is 199118
// Remember when we have a string and we add something to the string it will basically concatenate the strings, so we can't accept that this actually adds 18 this number here becoz it is a string.

// we need a way to fixing this of converting this string to a number.
console.log(Number(inputYear), inputYear) // first one is a number and second one is a string
console.log(Number(inputYear) + 18) // the way to convert a string to a number by using the built in number function. So we write number, parenthesis and then variables. This will now convert a number, the 18 will be added so output is 2009

// We can basically convert the strings to a number by using this function, which we execute using this parenthesis here.

// But now what we are trying to convert a number that is something inpossible to convert

console.log(Number("Adarsh")); // output is NaN (Not a number)
console.log(typeof NaN); // output is number, NaN is actually means an invalid number

// we get not a number when a operation involving number fails to give is a new number.



// Convert strings to number

console.log(String(23), 23); // first one has the value is string type and second one has the number type

// remember that the value is white in console which means it is a string, 


// Javascript can only convert 2 to 3 types, So we can convert to a number, to a string, to a boolean.

// But we can not convert something to undefined or to null or to boolean and thats because boolean behave in special way, and that we have discuss in next section for so called truthy and falsy values


// TYPE COERCION - javscript convert implictly automatically from one type to another

// whenever an operator is dealing with two values that have different type

console.log("I am " + 24 + " years old!"); // this produce a string that is I am 24 years old, 

// But how does this actually works? because 24 is a number, so we have different types here, we have string, a number and another string. And it works this way because of type coercion. In javascript the + plus operator that we used here trigger a coercion to strings. So whenever there is an operation between a string and a number, the number will be converted to string. So thanks to type coercion writing this would be exactly the same as writing this

console.log("I am " + "24" + " years old!"); // again the plus operator will convert a number to strings. And the same actually happens in template literals. It also take all the number value and also converts them to strings.

// No if javascript did not have automatic type coercion like many other language don't then we would have to manually do this like we just learned before

// then we would have to do string 23 then this would be the only way that this would work

console.log("I am " + String(23) + " years old!");

// but javascript have type coercion and so this will happen completely automatically behind the scene

// Now actually all operator do type coercion to string let me show you

console.log("23" - "10" - 3); // output is 10, now this time javascript converted the strings to number and indeed that's why we get 10 because 23 - 10 is 13 and 13 - 3 is 10.  

// It means the minus operator actually trigger the opposite conversion, So in this case strings are converted to a number and not the other way around instead we use the plus operator so what do you thnk is gonna happen

console.log("23" + "10" + 3); // output is 23103, then the three is converted to a string and then the three strings are concatenated.

console.log("23" * "2"); // output 46, because both of them are now converted to numbers, becuase that the only way that the multiplier operator can work

console.log("23" / "2"); // output is 11.5,


*/

// GUESS THE OUTPUT GAME

/*

let n = "1" + 1;  // turned out to string 11
n = n - 1;  // 11 - 1 = 10 so n is 10
console.log(n);  // output is 10

let j = 2 + 5 + 9 + "11";
console.log(j); // output is 1611

let m = 2 + 4 - 9 + "12";
console.log(m); // output is -312


let h = "10" - "4" - "3" - 2 + "5";
console.log(h); // output is 15


let g = "20" / "5" * "3" - "2" + "5";
console.log(g); // output is 105!


*/


// Note: Now, many people don't like type coercion and think that it's a bad practice to rely on type coercion.

// One reason for that, is that type coercion can in fact introduce many unexpected bugs into our program. 

// However it only happens when we don't really know what we're doing, so when we don't know about the stuff that showed you above, because if you know, then it's way easier to avoid these errors

// Coercion is actually a great mechanism, that is gonna allow us to write a lot less code and also to write more readable code

// Take some more time to think how type coercion work and then embrace these into your code.


/******************  TRUTHY AND FALSY VALUES IN JAVASCRIPT ******************/

/*

// Falsy values are values that are nit exactly false, but will become false when we try to convert them into boolean.

// In javascript there are only falsy values, 5 falsy values are:
// 0, " ", undefined, null, NaN, false itself is already false so we don't need to include it in the list of falsy values.

// so all of these falsy values will be converted to false when we attempt to convert them to a boolean, they're not exactly false initially, but they will become when converted to a boolean. so that's the defination of falsy value.

// Everything else are our so-called truthy values, So values that will be converted to true, for example any number that is not xero or any string that is not an empty string will be converted to true, when we attempt to convert them to a boolean. 

console.log(Boolean(0));  // false
console.log(Boolean(undefined));  // false
console.log(Boolean("Adarsh"));  // any string which is not empty string is called truthy value
console.log(Boolean("")); // empty string output -> false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean({})); // any object is also a truthy value


// but never use this function in practice. This was just to show you the concept of truthy and falsy value.

// But in practice the conversion to boolean is always implicit, not explicit, 

// In other words is always type coercion that javascript automatically doing behind the scenes

// But when exactly does javscript do type coercion to boolean, well it happens in two scenerios, First when using logical operator, and second in a logical context like for example, in the condition of an if else statement.

// Let see how type coercion work in if else statement 

const money = 0; // 0 is falsy value so the else block here is executed
if (money) {
  console.log("Don't spend it all!")
}  else {
  console.log("You should get a job 🧑‍💻")
}

const money1 = 100; // 100 is truthy value so the condition is true so if block here is executed
if (money1) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job 🧑‍💻");
}


let height; // undefined is falsy value, so in this case the else block here is executed

if (height) { // here this height variable in this logical context will automatically be converted to a boolean. And since height is undefined and undefined is falsy value, so height right here will be false, so therefore the else block will be executed
  console.log("YAY!, 🥳 Height is defined");
} else {
  console.log("Height is undefined");
}

// but now we assign something to it, no matter what it is, then we will get the other result

let height1 = 100; // here undefined is truthy value because we assign the number into variable, so here if block is executed
if (height1) {
  console.log("YAY!, Height is defined");
} else {
  console.log("Height is undefined");
}

// However, with this, we can actually run into a problem. So let's say that the height is zero for some reason, and that is perfectly a valid number, but watch what happens when we run the this code

let height2 = 0; // now we get again, the falsy value because zero is also a falsy value, and this one is also trigger the else block, and here the else block is executed
if (height2) {
  console.log("YAY!, Height is defined");
} else {
  console.log("Height is undefined");
}

// But in this case, that't actually not what we want. so this is a kind a bug or wrror in the application, because in this if else statement we didn't account for this scenerio., we only accounted the scenerio that the height is either defined or not, but we didn't think of the height being zero, but right now we get height is undefined, even though that't not true. so this is just an illustrate an example, that there can be a problems using this approach. However we can fix this by using logical operator

*/


/******************  EQUALITY OPERATOR: == vs. === IN JAVASCRIPT ******************/


/*

const age = 18; 
if (age === 18) { // now to check if the age is exactly 18, we use the triple equal operator
  console.log("YAY!, your age is 18")
} else {
  console.log("YAY!, your age is not 18")
}


// Now, whenever or if block only has one line, so we actually don't need two curly braces. So we don't need to create this block if you only have one line, So we can omit this and only write this one line of code

const age1 = "18"; // = this is asignment operator 
if (age1 === 18) {// === this is comparison operator
console.log("YAY!, You just became an adult (strict)");
}

*/

// well just like comparison operator, the equality operaotr will return a true of false value. so in boolean value, only in this case true will only be the resilt of this operator, in case that both side are exactly the same.

// === this one is called the strict equality operator, It's strict because it does not perform type coercion, because it only return true when both values are exactly the same

// On the other hand, there's also the loose equality operator, which is only two equals, and the loose equality operator actually does type coercion

// == does the coersion operator

/*

const age2 = "18"; // = this is asignment operator
if (age2 === 18) {
  // === this is comparison operator
  console.log("YAY!, You just became an adult (strict)");
}

if (age2 == 18) { // only this line of code will be executed
  // === this is comparison operator
  console.log("YAY!, You just became an adult (loose)");
}

*/

// "18" == 18 return 18, well this "18" will be converted to a number then the number 18 is the same as this number 18. 

// with the loose equality operator 18 to string is the same as 18 the number, because 18 the string will be converted to 18 the number.

// the loose equality operator is full of weired rules and behanviors, if this use this can introdcue many hard to find bugs into our code

// As a gerneral rule of clean code avoid the loose equality operator as much as you can, so when camparing values always use strict eqality operator with the three equal signs

// === this is must most javascript developer advice you to do, so it's a good rule for sure, even if you actually need type conversion in that case it's better to convert the value manually before the comparison then relying on the double equal operator.

// so always default to the triple equal operator, and pretend that this one does'nt even exist.


/////////////// EXAMPLE 1

// there is a pretty simple way og getting a value from any webpage we can do that by using  the prompt function
/*

prompt("What your favourite number!"); // basically all this here will create a value, but we need to store the input nuber somewhere so let's create a variable for this

const favourite = prompt("What your favourite number?"); // so in this favourite variable where the value that we put into that form will be stored
console.log(typeof favourite); // but it printed in white that mean that it is a string

if (favourite == 23) { // loose equality operator, and this one will do type coercion, right now we have here 23 is a string '23' == 23, so '23' this one will be converted to a number then the number 23  is equal to 23
  console.log("Hey, 23 is an amazing number!");
}

if (favourite === 23) { // it should not log
  console.log("Hey, 23 is an amazing number!");
}
// now we an convert the string to a number
// so now we can actually wrap all that in number function, that is used to convert


*/

/*
 const favourite = Number(prompt("What your favourite number?")); // here string is converted to a number, so right now favourite gonna be a number, and then it should be back at working with triple === operator 
 console.log(favourite);
 console.log(typeof favourite); 
 if (favourite === 23) { // 23 === 23, so ofcourse is true here, so then this line of code will execute and run
   console.log("Hey, 23 is an amazing number!");
 }

 */

 //but if we input the number 22 so this condition is false


 // so we are going to the next point so, we can add more condition to an if else statement

 // so far we can also add else if block like this

 /*

 const favourite = Number(prompt("What your favourite number?")); // here string is converted to a number, so right now favourite gonna be a number, and then it should be back at working with triple === operator
 console.log(favourite);
 console.log(typeof favourite);
 if (favourite === 23) {
   // 23 === 23, so ofcourse is true here, so then this line of code will execute and run
   console.log("Hey, 23 is an amazing number!");
 } else if (favourite === 7) {
   console.log("Hey, 7 is an amazing number!");
 } else if (favourite === 13) {
  console.log("Hey, 18 is an lucky number of virat kohli")
 } else if (favourite === 18) {
  console.log("Hey, 18 is an lucky number of Adarsh")
 } else if (favourite === 83) {
  console.log("Hey, 83 is an lucky number of Rohit Sharma")
 } else {
  console.log("Sorry, number is not 23 or 7 or 13 or 18 or 83");
 }

 // so here the first check if the number is 23 here, then if it's not it will of course go to the next block which is this one, then it will check this condition. Well if the number is 7 now then run this code, and then at the end, we can also add the else block

 // we can keep adding else if block as long as we want

 // now we are not going immediately into an else block once the initial conditon is false, now the other condition will be check one after another


 // There is also an operator for different, which is does opposite for equal

 // let now we check favourite is different from 23 so we use the exclamanation mark

 if (favourite !== 23) { // ! and == double equal which is the strict version and there's also the loose version which is this one != with just one equal but just as before always use the strict version. so if the number is not 23 so we log this message in console
   console.log("Why not 23?")
 } else if (favourite !== 7) {
   console.log("Why not 7?");
 }


 // so sometimes we need the different operator and sometimes we need the equality operator just choose whatever we need to solve the particluar problem

 // both case we make sure to use the stric version of the operator

 */





















