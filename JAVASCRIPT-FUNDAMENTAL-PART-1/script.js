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


 /******************  BOOLEAN LOGIC IN JAVASCRIPT ******************/

 // we also learn about logic that is boolean logic, basicaly boolean logic is abranch of computer science which uses true or false values to solve complex logical problems.

 // And in order to do that it uses several logical operator,to combine true or false values. So much like we use arithmetic operator to combine numeric values

 // Most basic logical operator which are the AND, OR and NOT operators.

 // Note: Boolean logic is not specific to JavaScript, this is all true to all programming.


/*   // AND OPERATOR

-  The AND operator is true if all of the variables is true
-  No matter how many variables

Let see how this AND operator work with example 

A: Sakshi has a driver's license
B. Sakshi has good vision

// Both of these are of course conditions, thst can be true or false because sarah could have no driving license and she could have no good vision. or on the other hand, she could have a driver's license and could have good vision
// Boolean variables that can be either TRUE or FALSE


Combine A AND B 
"Sakshi has a driver's license AND good vision"

but now what will be the result of this operation? Well for that we use so-called truth table, here we have two possible value for each of the variables A and B, which gives us four  possible combination of result

So what we can see from this table is that only if only if both A and B are true the result of the operation will be true as well, and that makes sense after all it's caleed the AND operator. So again what the AND operator does is to return true only if both A and B are true. In all other situation if eiter A or B are false then A and B will also be false. And we can also generalize this to more operands, so to more than just two values. We can do A AND B AND C and result would be true only if all of them are true, and if one of them is false, then the result is immediately false as well.
*/

/*  // OR OPERATOR

- which kind of works in opposite way
- The OR operator is true if just one of the variables is true
- if both variable is false then the operand is false
- It enough to one to be true to make the whole operation    became true as well

*/


/*  // NOT OPERATOR

- It does'nt combine multiple values
- Instead the NOT operator acts on only one boolean value
- Basically just inverts it
- So if A is true it will became false and if it's false then NOT A will become true
- Inverts true/ false value

*/

// And that's basically how these three most important logical operators work nut instead the best way to learn it to use a practical example

// let age = 16;
// then our two boolean variables
/* A: Age is greater or equal 20   // false
   B: Age is less than 30          // true

   so let's determine te value of each of them, so if age is 16 then age is greater or equal to any must be false and age is less than 30 is true, because 16 obviously is less than 30, so that's the baseline, now we will start to combine these variables A and B using some logical operators
   
   So the first exercise is the NOT operator so 

   - !A , (And we know right now that A is false, right so the result of !A as we just learned is true, because all it does is to invert the logical values of the variable)

   - A AND B , (And we already know that A is false and B is true, we have basically have false and true, so from a look from truth table, we can easily determine tha the result of this must be false. So when we have AND operator so it's enough from one of the operands to be false, to make the result of the operation also false )

   - A OR B , (so let's check the truth table in this case, so in this case, we actually get true, And so this shows that it is enough for one variable to be true, for the whole expression to be true as well)

   - !A AND B , (And we already know that NOT A is true and B is true, so at this time for the first time, we are combining multiple operatos here, and we already know that true and true will of course be true as well )

   - A AND !B , ( and just as side not, the !NOT operator actually has procedings over the OR and AND operators, so basically the values are inverted first and onky they are combined using AND or OR, so we know that A is false and B is true so !B must be false, right and then false OR false is also false, and actually that's the only way in which the OR operator can be false, if al of them is false basically.  )
*/


 /****************** LOGICAL OPERATORS IN JAVASCRIPT ******************/


 // AND OPERATOR EXAMPLE 

/* 
- true and true is true
- true and false is false
- false and false is false

*/
//  const hasDriversLicense = true;  // A
//  const hasGoodVision = true; // B

//  // now let's get started with the AND or OR operators

//  /* AND operator in javascript is this one &&, So it is we can combine two logical value */

//  console.log(hasDriversLicense && hasGoodVision) // so let see what the result will be, so result of true and true is true 

//  // It's enough to be one variable to be false for the result of the operation to be false


//  // OR OPERATOR EXAMPLE
 
//  /* OR operator in javascript is this one ||, So it is we can combine two logical value */

//  console.log(hasDriversLicense || hasGoodVision);

//  // so it enough for one of the variable to be true for the whole operation to become true.

//  // NOT OPERATOR EXAMPLE

//  /* NOT operator in javascript is this one !, So it is we can combine two logical value */

//  console.log(!hasDriversLicense); // variable are inverted true become false, and false become true

//  // Now since we know how all of this works, we can use these variables to take a decision

//  // so we want to determine whether sakshi should drive or not. so lets create a new boolean variable and use the others to determine that.

//  // Sakshi should drive if she has a driver's license and has a same time has good vision. We can now use this boolean logic to modal complex situation

// //  const shouldDrive = hasDriversLicense && hasGoodVision;

// //  // now we can use these variable to finally take decision
 
// //  if (shouldDrive) {
// //   console.log("Sakshi 😊 has able to drive!");
// //  } else {
// //   console.log("Sorry, 😔 someone else should drive...");
// //  }

// // we can write this condition directly in if statements

// //  if (hasDriversLicense && hasGoodVision) {
// //    console.log("Sakshi 😊 has able to drive!");
// //  } else { // else block here is executed because hasGoodVision is false, so our condition hasDriverLicense and hasGoodVision is not true, because it's only true in case that both of them are true.
// //    console.log("Sorry, 😔 someone else should drive...");
// //  } 
 
//  // this one is working perfectly let take to another level and add another boolean variable here

//  const isFreezy = false; // variable c

//  // so to use more than two variable for example hasDriverLicense or hasGoodVision or hasFreezy all you have is to do add another OR operator here just like other plus and minus operator, and the result of this is should of course true, because two operand are two

//  console.log(hasDriversLicense || hasGoodVision ||isFreezy ); // return true because it's enough to one of the operand is true

// //  console.log(hasDriversLicense && hasGoodVision && hasFreezy ); // return false because it's enough to one of the operand is false

//  if (hasDriversLicense && hasGoodVision && !isFreezy) { // well it's true, when isFreezy is false becuase !not operator is inverted the variable, now to fixed this we need to set isFreezy to false, so then this coniditon is true
//    console.log("Sakshi 😊 has able to drive!");
//  } else {
//    // else block here is executed because hasGoodVision is false, so our condition hasDriverLicense and hasGoodVision is not true, because it's only true in case that both of them are true.
//    console.log("Sorry, 😔 someone else should drive...");
//  } 
 

//  // So as you see with these three boolean operators, we can modal all kinds of complex decisions like this one


 /****************** SWITCH STATEMENT IN JAVASCRIPT ******************/

 // which is an alternative way of writing a complicated if/ else statement when all we want to do is to compare one value to multiple different options, 

 /// Example 1, basically we have a week day, and we gonna map one activity to each day

/*

 const day = "monday";
// may be you wondering why I'm basically hard coding all these variables and how this would work in the real world. Well in the real application, that used by the user in a browsers, usually most of the data comes from user input, so then we would'nt be hard coding all of this stuff. But right now we are just learning how to code

// let's now essentially map each activity to each day
// And for that we use if else statement with multiple if/else block nut we can also use the easier to use switch statement.

switch (day) {
  // we are switching a day and then we need a curly braces to assign a block and then we define a cases
  case "monday": // writing day equal monday, and if it is true then here will be executed.
    console.log("Plan to start to learn new course"); // here we can execute multiple lines of code, we don't need curely braces for that, after the case and colon all the lines are executed
    console.log("Plan to apply for a full stack developer job");
    // and the syntax of switch statement is little bit unusual unlike anything else in javaScript

    // anyway we can execute two console.logs here
    // basically what dis will do is it will compare day to monday here in a strict equality way === like this, so this here is basically writing day equal monday

    // now after this we actually need this break statement and you will see why in a second

    break; // terminate the second block
  case "tuesday":
    console.log("Revise the notes");
    break;
  case "wednesday":
    console.log("Started working in new project.");
    break;
  case "thursday":
    console.log("Go for a meeting.");
    break;
  case "friday":
    console.log("Schedule a call with teammates");
    break;
  // actually we can do a nice little trick, which is to run same code for two different values, so all we have to do is specify the case and then we can specify another case right after it, so whatever we write here is executed for both saturday and sunday, so without needing any logical operator as we would need with an if/ else statement
  case "saturday":
  case "sunday":
    console.log("Go for a long trip with family :D");
    break;
  // to finish we can also set a default, and so the default is gonna be executed, if all the other cases fail
  default:
    console.log("Not a valid day;"); // basically we can use this for invalid weekdays, it basically like an else block at the end of an long if else statement
    
    // without the break the code simply executing until it find the break, so after each block we need to tell it to stop essentially

    // Remember it is just like a strict comparison lile this day === "monday", if day is equal to monday then the code block is executed, and so on and so forth

    // so this was really designed for equality and not for like comparing stuff

    // it is technically possible to do that with some workrounds but that't not the goal of the switch statement.
}


// EXAMPLE 1 with if else statement

const weekDay = "friday";

if (weekDay === "monday") {   // remember we can use the strict comparision ===
  console.log("Plan to start to learn new course");
  console.log("Plan to apply for a full stack developer job");
} else if (weekDay === "tuesday") {
  console.log("Revise the notes");
} else if (weekDay ===  "wednesday") {
  console.log("Started working in new project.");
} else if (weekDay === "thursday") {
   console.log("Go for a meeting.");
} else if (weekDay === "friday") {
    console.log("Schedule a call with teammates");
} else if (weekDay === "saturday" || weekDay === "sunday") { // we can use the OR operator here
   console.log("Go for a long trip with family :D");
} else {
   console.log("Not a valid day;");
}

// not that in that case we of course don't need the break, because javaScript will only execute one of these blocks

// so in switch statement we have to write a little bit more code, but in my opinion, it's also a lot more readable, which means that this one is easier to understand, if you just read the code. 

// In if/else block here, we have a lot of repetitive code and lot of logical operators and all of these curly braces and it just looks a little bit weider

// Now the switch statement actually become less and less used but you should still know about it because there is definitely still a place for it sometimes



*/



 /****************** STATEMENTS AND EXPRESSIONS IN JAVASCRIPT ******************/

// An expression is the piece of code thst produces a value

// for example 3 + 4 is an expression, that gonna produce a value

/*

3 + 4 // this is an expression because it does produce a value

1991 // is an expression too even though it's just a simple value, But it's still also an expression, because it again will produce a value in javaScript

true && false &!false // so all of these here is an expression, because this will in the end produce some boolean value


// And the other hand , we have statements and the statements is like a bigger piece of code that is executed and which does not produce a value on itself

// Declaration is like the complete sentences and expressions are like the words that make up the sentences

// Basically we write our whole program as a sequence of actions and these actions are statements.

// Let's take as an example the, if else, statement

if (23 > 10) { // so this statement here does'nt produce a value
  const str = "23 is bigger than 10"; // the string itself is an expression and then this whole line of code is a statement, because this again does not produce a value, so basically whenever something ends with a semicolon, that's then a statement, is like a complete sentence

}// the code itself does'nt really matter here, so this if else statement is in fact a statement. So that's we have called the if else statement all the time.

// And the same is true for the switch statement, 


// the statement and expression exist, and the expression produce values, and the statements are like full sentences, that translate our actions, so the actions that we want the program to perform


// Now this difference between expressions and statements is important to know because javaScript expects statements and expressions in different places

// For example, in a template literal, we can only insert expression but not statements

console.log(`I'm ${2024 - 1998 } years old.`); // In here we need to put an expression in placeholders, something that produces a value which can then be put into the string that we're building here using a template literal and so this one will work

// However, we can not insert this if statement in here


// console.log(`I'm ${2024 - 1998} years old. ${if ( 23 > 10) {
//   const str = "23 is bigger than 10"
// }}`) // it wouldn't make any sense at all and we get an error in console, Unexpected token if and that's because javaScript knows that this is a statement and statements don't make any sense where javascript expects an expression.


const me = "Adarsh"; // if we had a variable for example
console.log(`I'm ${2022 - 1998} years old ${me}`); // then if we used variable that here, then this would actually also be an expression, because this variable will essentially just be replaced with this string, and so this produces a value and so of course this is completely acceptable.

*/



 /****************** THE CONDITIONAL (TERNARY) OPERATOR IN JAVASCRIPT ******************/

 /* 

 // we alreasy saw twoways of writing conditionals, the regular if/else statements and the switch statements, But there is another one, and that is the conditional operator. And this one is actually really nice.

 // so the conditional operator allows us to write something similar to an if/else statement but all in one line.

 // so let's again start by defining an age variable

 const age = 23;

 //age >= 18 ;// this is to check whether the age is atleast 18, so basically if the person is of full age and then after this condition we use a question mark 

// So that's essentially writing an if /else statement all in one line

 age >= 18 ? console.log("I'm eligible to take a driver license... 📃") : console.log("I am not eligible to take a driver license. ❌"); // or here write essentially or if block, so that's the code that we want to executed in case that this condition is true

 // so in this if block, so to say we can only have essentialy one line of code, so only one thing can be done if this condition is true. Then we also need basically a mandatory else block.

 // But instead of using a statement we use this conditional operator. And the conditional operator is also called the ternary operator because it has three parts unlike other operators

 // For example the plus operator has only two parts for example 1 + 2, but this one has three parts, i.e. the condition >=, then the if part and then the else part

 // Now the conditional operaotr is in fact an operator just as the name says, and remember that the operator always produces a value, So in other words an operator is an expression right.

 // So what does means is that if we have a value then we ca assign that value to a variable So with this we can make a ternary operator really useful to basically conditionally declare variables
 
 // So what we did here is not so much used indeed, instead we do it more like this, so would still test for this condition

 age >= 18 ? "Eligible for driver license" : "Not eligible for driver license"; // again this while operator here is now an expression and an expression produces a value and now we can go ahead and store that value into a variable

 const drivingLicense =
   age >= 18
     ? "✅ Eligible for driver license..."
     : "❌ Not eligible for driver license.";
  // and then we can log the string to the console
  console.log(drivingLicense);

  // so drivingLicense is now really defined conditionally based on this condition age >= 18, and all in one simple line. So without the conditional operator we would have to use if/else statements and with that this wouldn't be so easy.

  // Remember when we want to declare a variable inside of an if or else block we need to first declare that variable outside, so let's actually do that below
  const age1 = 23;
  let drivingLicense1; // define a variable here 

  if (age1 >= 18) {
    drivingLicense1 = "You are eligible for driving license";
  } else {
    drivingLicense1 = "You are not eligible for driving license";
    }
console.log(drivingLicense1);

// again we need to define an variable outside of an if and else block because any variable that we define inside of an block is not available outside. so we define a variable outside and then reassign it inside of the blocks

// we really just did this for the sake of comparison so we can see the tremendous difference that the ternary operator introduces here in our code.

// so the ternary operator is lot easier to understand and lot easier to write

// so using the ternary operator is lot easier to transform the big block of code all into one small operation


// since the ternary operator is really an expression, we can now use a template literal unlike a normal if/else statement. 

// we are tried to insert the if statement in template literal and of course if did'nt work

//  console.log(`I'm ${2024 - 1998} years old. ${if ( 23 > 10) ;

// but using the ternary operator which produce a value, we can actually have conditionals inside of a template literal.

console.log(`You are ${age >= 18
     ? "✅ Eligible for driver license..."
     : "❌ Not eligible for driver license."}`);

// always keep in mind the concept of operator, and of expression which is something that produces a value and we can put this value in this placeholder in the template literal.

// The ternary operator is not thought as a replacement of if/else statement, we still need if/else all the time. For example, when we have bigger blocks of code that we need to execute based on a condition. In that case the ternary operator is not gonna work. But the ternary operator is perfect when we just need to take a quick decision for example like this one 


/*

/* 
age >= 18
     ? "✅ Eligible for driver license..."
     : "❌ Not eligible for driver license."
*/

// And that's especially true in places where javaScript expects an expression just like here in the template literal, so here we could not use an if/else statement, so the ternary operator really comes to our rescue here. So I think you can understand that ternary operator is really really important.


 /****************** JAVASCRIPT RELEASES: ES6, ES6+ AND ESNEXT IN JAVASCRIPT ******************/


 /* 
    A BRIEF HISTORY OF JAVASCRIPT
     
    1. 
    - 1995: Brendan eich creates the very first version of javaScript in just 10 days. It was called Mocha, but already had many fundamental features of modern javaScrip!

    2. 
    - 1996: Mocha changes to liveScript and then to javaScript, in order to attract Java developers. However, javaScript almost nothing to do with java. javaScript and java are two completely different languages.

    - Microsoft launches IE, copying JavaScript from Netscape and called it JScript for legal reasons because we cannot just go around and copying other people's programming languages. It means now we have two very similar but competing languages, which of course a never a good idea in the long run. And so the internet growing crazy around this time, people realized they needed to standarize JavaScript. 

    3.
    - 1997: So the language was submitted to an independend standard organization called ECMA which in 1997 released ECMAScript 1 or ES1. This was the very first official standards for the javaScript language. And with this every browsers could now implement same standard javaScript. And the real world we usually use the term ECMAScript to refer to the standard, while javaScript is used when we talk about the language in practice as it's implemented in browers.

    4.
    - 2009: Now fast forward to 2009 after a lot of complications and disagreements about where the language should be headed, ES5 was released with a lot of great new features.

    5. 
    -2015: And then finally, another six years later the much awaited new version ES6 was launched in june, 2015, and this was the single biggest update to the language ever. It contain a ton of new exciting features, which we will explore throughout the entire course

    - This was, and still as a very big deal for javaScript and for the whole web developer community.
    
    - Now, you wll also see ES6 being called ES2015, which is actually the official name, but most people just call it ES6.
    
    - Actually the reason for ES6 being called ES2015 officially is that in 2015, ECMAScript changes to an annual release cycle.

    - So right now there's going be a new release every single year.

    - Reason for that is that they prefer to add a small number of new features per year, instead of shipping a huge new version, every couple of years, like it happened with ES6. 

    - So this way, it's gonna be much easier to everyone to keep up to date.

    - Release of ES2016/ ES2017 / ES2018 / ES2019/ ES2020/ ES2021/ ES2022 /.../ ES2089 and like this it will continue until the end of time.

 */


  /*
   BACKWARDS COMPATIBILITY: DONT'T BREAK THE WEB

   - There is one particularity about javaScript realeses which is pretty unique for any programming language that is backward compatibility all the way to ES1, so what does this actually mean

   - Basically it means that if you were to take some javaScript written back in 1997 and put it in a modern browser with a modern javaScript engine today, it would still work just the same.

   - So agin the javaScript engine that's in our browser today is able to understand old code written 25 years ago, without having to rely on version numbers or anything like that. It just works

   - And it works this way because of the fundamental principle that baked into javaScript language and its development, which is to not break the web. This means thhat there is almost never anything removed from the language, but only added in new version. Actually we cannot called him new version even because they do not contain breaking changes like when other languages moved to a new version. Instead new version are always just incremental updates which add new stuff. So i like to call them releases and not versions. 

   - The ECMAScript committee who works on updating the language does all this so the old websites basically keep working forever.

   - Just imagine they removed some important feature that made a website from 2008 work just fine. If you then want it to visit that page, it will be broken. And that's why we fortunately have to don't break the web principle.

   - And of course this comes with problems because there are tons of old bugs and weired things and the language.

   - Remember that Brendan Eich made the very first version in just 10 days and no one back then could even imagine, what javaScript would be used for one day.

   - The initial goal of javaScript was just to add some simple dynamics to pages, not to write whold applications in the browsers like we do today.

   - But anyway these bugs and weired quirks in the language have been giving the language a bad reputation among many programmers who can really take JavaScript serious because of this.
   
   - But here's the thing, ww can actually go around many of the weired stuff by simply learning the modern javaScript that matters today and just ignore most the old weired stuff.

   - So next time your friends start hating on javaScript and believe me it actually happens, then just tell them about the amazing things that you can build with it.
  
  */

  /* 
   FORWARDS COMPATIBILITY

   - so what do you think would happen, if we took this totally made of code

   // ES1 CODE  (1997)
   
   function add(n) {
    var x = 5 + add. arguments(0);
    return x; 
   }

   // ES2089 CODE 😂
   c int add n <==> int 5 + n


   from the year 2089 and try to run it in today browsers?

   - well you probably right, it would not work at all. There would be errors left and right, and nothing would work. That's why we could say that javaScript is not forward compatible because current browsers do not understand code from the future.

   - And this actually brings us to our next topic, which is how we use modern javaScript today?
   
  */

  /*
   HOW TO USE MODERN JAVASCRIPT TODAY
  
  - Because browsers that users are using today might be old, there is not forward compatibility right?

  - So the answer the question how we can use modern javaScript today we need to consider two distinct scenerios

    * Development
    * Production
  
  - So the development face is simply when you're building the site or application on your computer, to ensure you can use the latest javaScript features in this face. All you have to do is to use the most uptodate version of the any browsers. This will ensure that all the features show in this course will work for you as well.

  - The second scenerios is production, which is when your web application is finished, you deploy it on the internet and it's then running in your user's browsers. And this is where problem might appear because this is the part that we actually can't control. We cannot control which browsers the user uses and we also can't assume that all ur users always use the latest browsers right?

  - Now the solution to this problem is to basically convert these modern javaScript versions back to ES5 using a process called 

  ^ transpiling and also
  ^ polyfilling

  - we will use a toll called Babel to transpile our code, but for now, during this course, we won't need that because we are using the most uptodate browsers during development, transpiling back to ES5 is only necessary when your app is developed and you want to ship it to your users.

  - Now let a look how different javaScript releases can be used today.

  - so first off ES5 is fully supported in all browsers today, all the way to internet explorer 9 from 2011, so we can assume that ES5 is safe to be used at this point, which is the reason why we use a target for transpiling.

  - Now about the new released, ES6, ES7 and all the way to ES2020, as of mid 2020, they are actualy quite well supported already in all modern browsers.

  - And we usually call all the current version together ES6+. So right now that't from ES6 to ES2020, and basically all together they are the modern javaScript.

  - Now in the modern javaScript basically in this ES6+ where transpiling comes in as i mentioned eariler, because it's not safe to assume that all our users are using these modern browsers and we don't want to break our app for them, right?

  - And by the way if you want to stay up to date with what features are currently supported in which browser, we can check out the ES6 compatibility table

  - https://kangax.github.io/compat-table

  - Now there are also future releases of the language ES2021, ES2022 and so on and these future releases together are many times called ESNext. 

  - Well, because most browsers actually start implementing new features even before they enter the official ECMAScript specification. That's possible because as new features are proposed they have to go through four stages.

  - Starting with stage 1, when they are first submitted all the way to stage 4, at which point they enter the language offically, But when a feature is at stage three, browsers can be pretty sure, it will eventualy pass to stage four. And so they're gonna start implementing that features while still in stage 3.

  - With the annual release cycle, this is now very easier to do, because there will be no drastic changes to the language like ES6 was.
  */

  /* 
   MODERN JAVASCIPT FROM THE BEGINNING

   - Learn modern javaScript from the beginning.
   - But also learn how something things used to be done    before modern javaScript (eg const & let vs var and function constructor vs ES6 class).

   - Why butter with ES5 at all? You might ask?
     * You will better understand how some features in javaScript actually works behind the scenes. For example ES6 classes which hide the all the implementation details of object oriented programming in javaScript.

   - Many courses and tutorial that you find online are still written in ES5 today.
   
   - As a developer, in many job, you will actually have to work on older code bases. And it's totally possible that the code base might still contain a lot of ES5 code.
  */




 









