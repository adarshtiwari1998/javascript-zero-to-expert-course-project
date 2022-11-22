/****************** STRICT MODE IN JAVASCRIPT ******************/

/*
- So strict mode is a special mode that we can activate in javaScript, which makes it easier for us to write a secure javaScript code.

- And all we have to do to activate strict mode is to write this string "" at the beginning of the script "use strict" and that's it. So with this we activated strict mode for the enture script.

- Now what's important is that this line of code, so this statement here basicaly has to be very first statement in the script, so if we have any code before this then strict mode will not be activated.

- comments are allowed because javaScript will just ignore them but no code

- we can actually also activate strict mode only for a specific function or a specfic block. But always just use it a the beginning of each script.

- Always put strict mode in the beginning of your script and like that write more secure code.

- Strict mode makes it easier for us developers to avoid accidental errors. So basically it helps is introduce the bugs into our code and that's because of two reason.

- Strict mode forbids us to do certain things and second, it will actually create visible errors for us in certain situation in which without strict mode javaScript will simply fail silently without letting us know that we did a mistake

- Strict mode forbids us to do certain things and second it creates visible errors in the developer console, where in other situation javaScript would just fail silently.

- Let see an example of one of the more important changes that strict mode introduces

*/

// "use strict";

// let hasDriversLicense = false;
// const passTest = true; // by default we should always const to avoid accidental errors
// I am using let keywords in both variables because I want to change them later

// write some logic here, when they pass the test this variable hasDriversLicense set to true

/* 

if (passTest) // this here is boolean value, so this condition will be either true or false and then lets introduce here a simple bug here

// so this (hasDriversLicense) is a kind of hard to write variable nameso lets pretend that we are writing it wrong here

*/

// if (passTest) hasDriversLicense = true; // what I did here was to basicaly omit the "s", so this letter is not in this variable, that I am trying to change here to true. And again that is an error I'm making here on purpose just to show you how strict mode can helps us avoid a certain kind of error, because doing this actually more common then you might think

// and now lets lock something to the console

// if (hasDriversLicense) console.log("I can drive");

// And now let's actually start by deactivating strict mode again just so we see how this bug (hasDriverLicense = true;) could effect our code

// And what we see in the developer console is that it did'nt log "I can drive" to the console, Even though we had attempted to set (hasDriversLicense) to true here, so we expected that drivers license being true should then log "I can drive" but it did'nt work and that's because of the mistake that I just introduced here on purpose forgetting this "s", after adding "s" , so without the error it should work, but without it, it's not gonna work.

/*
And again here, I set a new variable to true,

//   if (passTest) hasDriversLicense = true;

and not the original one

// let hasDriversLicense = false;

// if (passTest) hasDriversLicense = true;

so this one is still false and that's why here, this logging does not happen

*/

// so now our program has a bug, which means that it has a mistake and we would now go ahead and find that bug, but strict mode can actually help us with this, so lets turn this back on

/*

"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive D:");

// now here we got an error, so here we see that hasDriverLicense is not defined, so this error message now tells us exactly what is wrong, so it tells us that this variable is not defined, then we can find out that we did a mistake here we're missing a "s".

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive D:");

// so strict mode really helped us avoiding this kind of bug that we created here.

// Now another thing that strict mode does is to introduce a short list of variable names that are reserved for features. That might be added to the language a bit later

// For example let's try an another example



*/

/*

const interface = "Television"; // error coming in console, we get an unexpected strict mode reserved work error message basically.

// And that is again because javaScript is reserving this word here for a feature that it might implemented in the future. And so by reserving these kind of words it will then make it easier, to implement the feature in the future.

*/

// so another example is private

/*

const private = "Password"; // so this one is also not work and that's because in the future there might be something called a private field and classes or in some other places even in the language and they might want to use this word for that.

// And strict mode reserves these words so we cannot use them for variables.

*/

// same logic as this one

/*
const if = 12; // so we cannot called a variable if and that's because there is already an if statement, so here we get an unexpected token if and that's like the rule that I explained to you in the beginning about naming variables

*/

/*

Now there are actually a lot of other changes that affect things that we haven't learned about yet so that's stuff like:

* function objects,
* setting properties on primitive value 

*/

// Always add strict mode turned on to all the scripts in the future



/****************** FUNCTIONS IN JAVASCRIPT ******************/

/* 

 - The fundamental building block of real world javaScript  appliations are functions.

 - They are one of the most essential concepts in the language so let's learn function

 - A function is simply a piece of code that we can reuse over and over again in our code.

 - It's litle bit like a variable but the whole chunks of code.

 - Remember a variable holds value but a function can hold one or more complete lines of code.

 - So let's declare our very first function
 
 - so we start with the "function keyword and we define a function name and then we need parenthesis and we will see why we need in the next example and then we use the curly braces to create a so-called function body, so all the code that is within this code block"

 - and let's now just create simple kurtas which is function that will simply log

*/

/*

function kurtas ()  { // so all the code within this block of braces is called a function body, and this code will be executed when we run this function                           
}

*/


// Lets say we need to execute a log many times somewhere in out program

/*


function kurtas1 () {
  console.log("My name is Adarsh..."); // somewhere in our program we need to reuse this line of code multiple times, so that's why we put it in a function. So we can created a function and now we can use it as many times as we want.

}

// so to use a function, we simply write the function name followed by parenthesis and that's actually it

kurtas1(); // and this process here is basically using the function is called "invoking the function, running the function or calling the function"

kurtas1(); // we can run or use this function as many times as we want and each time that we call this function like this then the code that is in the function will get executed
kurtas1();

// we just wrote our very first function and its already working


*/


/* SOME MORE FUNCTIONALITIES OF FUNCTION */

// function can do a lot more then simply reusing a line of code like we did here

// so usually when we write function we also pass data into a function and additionally, a function can also return data as well, which means to give us data back that we can use then use for something else in the program.

// so a function cannot only reuse a piece of code, like we did here, but it can also receive data and return data back.

// so think a function as a machines so it's a great anology

// for example let imagine a food processor, so we put food into the processor, then the processor does something to our food, which is the function body basically and then in the end food processor returns to processed food, for exmaple a mango juice

// so that's exactly what we can do with function as well and actually let's implement exactly this exmaple


/* 

- function and in the parenthesis we choose the descriptive function name just like a variable name

-  but in this function and we also specify something called parameters.

- and parameters are like variable that are specific only to this function and they will get definced once we call this function.

- So that's give fruitProcessor function two parameters: "mango" and second one separated by a comma called "banana".

- and again these two will get defined once the function is called and they represent the input data of this function.

- And this will make even more sense, when we then actually call his function.

*/

/*

// And this will make even more sense and this kind of function the way more usual
function fruitProcessor(mango, banana) { // these mango and banana parameters will be a number once we call this, 

  // logging these to the console
  // console.log(mango, banana); // so what I'm doing here is to actualy use these parameters here. So mango and banana just as if they were normal variables here inside this function

  // and now let's actually do something more interesting with these parameters

  // so we want to kind of simulate that is fruit processor produces a juice out of the mango and banana that we give it and let's just create a string, which says that

  const juice = `Juice with ${mango} mango and ${banana} banana.`; // template literal then using the mango parameters because this mango parameters will be a number once we call this. Foe example once we set mango to 3, then string will be juice with 3 apples, and again this will really make sense once we call this function 
   
  // Here we build a string using the input data thatwe get into the function and now comes the really cool part because now we can use the return keyword
  return juice; // and with this we can return any value from the function, and so let's actually return the juice that we just produced, and so this value that we then return can be used anywhere later in our code.

  // basically this juice will become the result of executing this function and let's actually do that.
}

// let's call run or invoke this function now

fruitProcessor(4, 5);// now we're gonna specify the actual values for the parameters "mango" and "banana" so let's say for example 4 mangoand 5 banana, so these now will be the inputs of the fruitProcessor function.

*/

/*  so you can think of these parameters here:

function fruitProcessor(mango, banana)

like empty spaces that we still need to to fill out when we are writing the function, so when we call the function, then later in the code here at this point,

fruitProcessor(4, 5);

 we then fill these input blanks spaces by passing in the real specific values, which will then get assigned to the parameters.

 And this example, "mango" will become 5, and "banana" will become 5

 - And these actual value of the parameters are called the arguments.

 - So in this function the "mango" parameters or you can think of this parameters as a variable is now 4 and "banana" will become 5

 - But now you might wonder what about the juice that we just produced here? Where is it?, Well the juice was returned from this function, so basicaly that means that the result of running this function here is the juice that we just returned.


- Basically, once this function fruitProcessor(4,5) has been executed this code here is then replaced by the result of this function, And in this case that's gonna be the juice string that we produced. so if you want to use the value that we returned, we need to store it in a variable.

*/

/*


const mangoJuice = fruitProcessor (4, 5); // we called fruit processor function here with two arguments 4 and 5 and these arguments are the specific, So the actual values of the functions parameters which are "mango" and "banana". And So when the function is running now, "mango" will become 4 and "banana" will be 5. So then we use these values to build this juice string and then we return that value from the function and what that means is that basically the result of calling this function will be the juice value that was just returned. And then we need to save the value somewhere, we need to capturing it, and we do that by basically saving it into this mango juice variable and then we can simply log that value to the console, ofcourse we could have also directly logged it to the console.
console.log(mangoJuice); // now we get juice with 4 mango and 5 banana.


console.log(fruitProcessor(4, 5));// now the fruitprocessor function is executed twice, only in this case we did not capture the value into any variable, we simply log the result of running this function to the console directly.

// Now thanks to the power of function we cam reuse the function with different input values and then get a different output.


const mangoBananaJuice = fruitProcessor(2, 4); // we are defining specific values here, which are the arguments, which will get passed into the function here as these parameters this one [function fruitProcessor(mango, banana)]

console.log(mangoBananaJuice);

// Essentially what we did here was to create a very generic function 


*/

/*

function fruitProcessor(mango, banana) {
console.log(mango, banana);
const juice = `Juice with ${mango} mango and ${banana} banana.`;
return juice;
}

*/

// that works for any number of mango and banana, So it's really like we're leaving mango and banana as the blank spaces, and then when we call the function we fill in the blank spaces using our arguments. So 2 and 4 in this example,

// And of course, we could run this function as many times as we want it but we should call it at least once, because if we never called a function then the code in the function will never be executed. And that makes sense. 

// So without executing the function it's kind of useless because the code will never run, will never be processed because that only happens once we called a function

// if the function has no parementer like this

/*
 function noParameterFunction () { // here not specify any parameters
 console.log("No parameter function example..")
 }

// caling the function, invoking the function , running the function

noParameterFunction(); // here we not specify any arguments 
*/

// So in this function we do not specify any parameters, we could do that,

/*


function noParameterFunction ()  {
  // not specify any parameters
 console.log("No parameter function example..");

 // you see this function does not return anything but that's not a problem at all, not all functio need to return something and not all function need to accept parameters
}


noParameterFunction(); // and here when we call the function, we do not specify any arguments, we could do that
noParameterFunction(23); // so let just pass 23, but since there are no parameters, it will not get used, so specifying the arguments here or not will not have any effect


// So function like this without parameters and without a return we really only use, when there is a block of code that we want to use over and over again

// Once more keep in mind that this function does not return anything, all it does is to log something to the console, but that has nothing to do with returning a value, This only prints a message in the developer console, but it does'nt return a value

noParameterFunction();  // basically this here does not produce a value, because we don't return anything from the function and that's also we don't save the result of the function to any variable. Because it does'nt produce any result. Technically it does produce undefined like this

const result = noParameterFunction();
console.log(result); // OUTPUT: undefined

// we don't capture that undefined value


*/


/* Review this lecture throughly and understand of how all of this work together

- How we writing the generic function with parameters works together
   
function fruitProcessor(mango, banana) {
const juice = `Juice with ${mango} mango and ${banana} banana.`;
return juice;
}

- With then calling a function with the specific values

     fruitProcessor(4, 5);

- And how the function then returns a value

   return juice;

- And how in the end we then received that value here and capture it into the variable

   const mangoJuice = fruitProcessor (4, 5);

*/ 

/* LECTURE SUMMARY

1. Function allows us to write more maintainable code because with functions we can create resuable chuncks of code instead of having to manually write the same code over and over again. So that's the most important things that we need to know about functions. 

2. And when you know that, you will know when you should actually use function.

3. And this is actualy the most important principle for writing clean code that is used in programming language all the time. 

4. And this principle is called "don't repeat yourself or dry" so we say that we should keep our code dry, which means that we should not repeat ourselves.

5. And function are perfect for implementing dry code because they are reusable code blocks, that's together make up all applications

6. Function are the fundamental building blocks of javaScript programs

7. And now you will also understand that the, 
    console.log(); is also just a function, but it actually a built-in-function that we do not have to write ourselves

*/


/****************** FUNCTION DECLARATIONS VS. EXPRESSIONS ******************/

/*

- In javaScript there are different ways of writing functions and each type of function works in a slightly different way. But they are still are very similar.

*/

// So the function that are showed you in the last lecture are called function declarations becuase we simply use the function keywords to declare a function a bit like we declare a variable.

/*  EXAMPLE 1

- So let's now write another function declarations and this time a function to calculate an based on a given berth year

- so we want a person's birth year as an input to this function.

- And whats ia a input, well it's just a parameter in this function

- And parameter remember it's a bit like a local variable and only available inside of this function

*/

/*

function calculateAge1(birthYear) {
  // how do we calculate the age

   const age = 2024 - birthYear; 

  // and then remember to take this value now out of the function, we return it using the return keyword

  // so we calculated the age first and then we return that value

  // actually we can simplify this and basically return all in one go, So there's actually no need to store this value here in a variable, if all we do is then later return that value

  return age;

  // to get rid our of this we can do this 
  
}

*/

// FUNCTION DECLARATION 

/*

function calculateAge1 (birthYear) {
  return 2032 - birthYear; // simply return the result of this expression here

  // This is a generic function, which is then gonna work for any birth year that we give it
}


// NOTE: Parameter is a kind of placeholder in the function, and the Argument is then the actual value that we used to fill in that placeholder that is the parameter.

// calling the function, invoking the function, execute the function

calculateAge1(1998); // This will now create a value, and value that this will create is the value that returned from the calculateAge1 function basically this returned value (2030 - birthYear), once again we need to capture this value into a variable

const descCalculateAge1 = calculateAge1(1998); // we can pass the actual value of parameter which is called the argument
console.log(descCalculateAge1);

// we can rid of this and do this way

console.log(calculateAge1(1998));

// So that is the function declaration

*/


/* FUNCTION EXPRESSION */

/* 
- That's the other type of function that exist, and it look like this.

- Instead of writing a function with the calculateAge1 name, we simply write function basically without a name and then we still define a parameter and we still define a function body, and we write a function like this and then what we have to do is to store all of this here into a variable and that variable will then be a function

*/

/*


const calculateAge2 = function (birthYear) {
  // we did write a function in a very similar way but we did'nt give it a name here. So it's a function withour a name basically, which is also called a anonymous function.
  return 2032 - birthYear;
}   // so all of this is basically an expression, and rememeber that an expression produces a value, so we use that value and store it into calculateAge2, so this will then be the function. 

// So calculateAge2 is now a function, so now to call this function we actually do it in a same way

const descCalculateAge2 = calculateAge2(1988);

console.log(descCalculateAge1, descCalculateAge2);

*/

/*
- So the function expression is work same way as a function declaration, so we call it in the same way we capture, the return value in the same way and of course the result in the same way because the function body is the same.

- But it's very important to know that we have these two types of function in javaScript, because in some places we will actually to write them like this as you will see as we go through the course.

- So this function is an expression, 

  const calculateAge2 = // this variable hold the function value basically 
  function (birthYear) {   // so this function is an expression and remember the expression produce values, so we just assign this whole value here then to a variable, and this variable will then hold the function value basically.

  return 2030 - birthYear;
  }

  - Function are just values in javaScript, just as a number or a string or a boolean value, so function is not a type, is not like a string type or number type, but it's also a value. And so if it's a value, we can store it in a variable

  - So just Keep this in mind, because it will become very important later when we really dig deep into a functions.

*/

/* 
Ques: So what the big difference between function declaration and function expressions?

Ans: The main practical differences that we can actually call function declarations before they are defined in the code. Now we ae calling it first and then defining it later. And it still works. 
*/


/*

// calling the function

const descCalculateAge3  = calculateAge3(1998);
console.log(descCalculateAge3);

// function declaration

function calculateAge3 (birthYear) {
  return 2032 - birthYear;
}


*/



/*
- But if we attempt to do the same with the expression then it should not work, let me show you the example. 

Error: cannot access before initialization.

- It happens because of a process called hoisting but more about that in a future section.


- But keep in mind that, we can called a function declaration before we define it, even though that might not be such a good idea in many cases. But you can do it if necessary.


*/

// const descCalculateAge4 = calculateAge4(1998);
// console.log(descCalculateAge4);

// const calculateAge4 = function(birthYear) {
//   return 2030 - birthYear;
// }


/*
Ques: But another question you might have in your mind is which of the two types of functions should I use when I write my own function?

Ans: And well, the answer is that oftentimes is really just a matter of personal preference. So different developers prefer different formats. 

* But mostly developers use function expression, because this then forces me into a nice structure where I have to defined all the functions first at the top of the code and only then I can call them. So this makes the code a little bit nicer and more structured.

* Most developers also like to have everything stored in variables, both values and functions, but again that is depend on own personal preference. 

* And many other developers don't agree with this and prefer to use function declarations. If you prefer function declaration so that's fine. 👍Just use function declaration then.

** However even if you prefer one over the other, you still need to know about both the "function expression" and "function declarations". So you can not just pick one and then forget the other one, because both have their place in javaScrpt. So it's really important that you know how to use and how's to distinguish both function declarations and expressions.

*/


/****************** ARROW FUNCTION IN JAVASCRIPT ******************/

/*
 - There is actually a third type of function that was added to javaScript in ES6 and that's the arrow function

 - An arrow function is simply a special form of function expression that is shorter and faster to write.

 - Comparison between the funtion expression and arrow function below

*/


// const calculateAge4 = function(birthYear) {
//   return 2030 - birthYear;
// }


// let's write the Arrow Function

/* simply write the birthYear, because we want to calculate the age again and then we write an arrow and that's the reason why this function called the arrow function. And then we simply write what we want to return so in this case that's 2032 - birthYear and that's it. Now to finish we actually want to be able to use this function. So let's again sotr it in a variable, just like we did above in function expression

*/

/* 


const calculateAge5 = birthYear => 2032 - birthYear; // set the variable to this function here, as I said this is a special form of function expression, because it still a function expression actually.

*/

/* (birth => 2032 - birthYear), so it's a value all of this that we assign to this variable (const calculateAge5) */

// so just like this function expression up here

/*
- Arrow function is lot easier and faster to write

REASON FOR THAT

- we don't need a curly braces like we have in function expression to define a code block

- And second is that the return actually happens implicitly, so the value here  (2032 - birthYear) automatically be returned, without us having to explicitly write the return keyword. So this is excellent for simple one-liner functions.And this is gonna be extremely helpful in certain situations.

- Now to use this function it of course, works the exact same way as using all the other functions. Example below
*/

/*

// it works same as other function
const descCalculateAge5 = calculateAge5(1998); // again we save the returned value here to a variable
console.log(descCalculateAge5);


// so indeed the value that we calculated was returned automatically without us having to write the return keyword.


/*

/* No we see that here we also did'nt need any parenthesis or anything like that 

const calculateAge5 = birthYear => 2032 - birthYear; // just this here is the function.

*/

/* Now, this is actually jus tthe simplest form, which is when we only have exactly one parameter and only basically one line of code, in which we want to return something.

birthYear // it is the parameter
2032 - birthYear // one line of code

*/

// But it gets a little more complex when we add more parameters and more code


// EXAMPLE 2 

/* Ques: Calculate how many years a person has left until retirement */


// because to calculate the numbers of years until the retirement based on the birth year alone, 

// so first we need to calculate the age, and then from there, we need to calculate the retirement age minus the current age

/*

const yearsUntilRetirement = birthYear =>  {

const age = 2022 - birthYear; // calculate the age based on birth year
const retirementAge = 65  - age;
// now lets calculate the retirement age, so lets say retirement age is 65 years, so (65 - current age), so that will then give us how many years we have left 

return retirementAge; // now to return this retirement we actually need to write the return keyword explicitly.

}  // we need more lines of code and so we are back to actually needing the curly braces in order to define code block

*/

/* so we can only omit the return, in case we have one liner function like this,

(birthYear => 2032 - birthYear; )

but if we have more then we eed to do the return still

return;

*/


/*


// So let's run the function, invoke and call the function

const result = yearsUntilRetirement(1998); // we could capture the return value and store into a variable and also we can log the value to the console directly
console.log(result);  

console.log(`${result} year's left for the retirement...`); //log the value to the console directly


// That's the scenerio, when we have one parameters and more then one line of code basically

// And remember in that situation we need the return statement 


*/


/* But now, what if we have multiple parameters? 
  - Then we need to wrap the parameters into parenthesis 
*/

// EXAMPLE 2.1 

/* Let's say we want the (birthYear) and also the (firstName)*/

/*

const yearsUntilRetirement1 = (birthYear, firstName) => {
const age1 = 2022 - birthYear;
const retirementAge1 = 65 - age1;
// return retirementAge1;
// we can return like a sentence, so instead let's return a string 

return `${firstName} retires in ${retirementAge1} year's... 🧓`  // we can using a template string to build that string
}

console.log(yearsUntilRetirement1(1998, "Adarsh")); // add two argument here and log the value to the console directly.

console.log(yearsUntilRetirement1(1992, "Shubh"));


// that's essentially how arrow function works, you just need to keep in mind that couple of different scenerios that theere are regarding to the number of lines of code that you need and the number of parameters. So as you add more code and more parameters, it gets a little bit more complex and we kind the lose the advantage of using the arrow function


*/

/* So you might be ask the question 

  what type of function should I use? 

1. Should I use arrow function for everything? Since they're so easy to write?
Ans: Well the answer is no, but it's also complicated. That's because there is another fundamental difference between the arrow function and more traditional functions which include "function declaration" and "function expressions".

- It's a fact that arrow function do not get a so-called "this" keyword, and "this" is once more is a topic for much later.

- Remember learning is not at all a linear process

- Sometimes you don't have write regular functions at all, but again, you cannot yet understand all the implications of using arrow functions. So for now again, we will keep using probably the function expressions the most.

*/


/****************** FUNCTIONS CALING OTHER FUNCTIONS IN JAVASCRIPT ******************/


/* Let's now take functions even one step further and calling one function from inside another function. And this is something that we do all the time in javaScript. But many developer has struggle to understand the logic behind this */

// function fruitProcessor(mango, banana) {
// const juice = `Juice with ${mango} mango and ${banana} banana.`;
// return juice;
// }

// Remember that we had the function, which was like a fruit processor, which received a certain number of mango, and certain number of banana. And then based on that it basically produced and returned juice to us.

// But now in this example let's consider that the fruit processor can only make juice with smaller fruit pieces.

// And so before making the juice, the fruit processor now needs another machine that first cuts the fruits that we give it to multiple smaller piece.


/*

function cutFruitPieces (fruit) { // then function receive a fruit
// and all this function will do, is to return the fruit cutin four pieces

return fruit * 4; // if we get 4 apples then it will return a 8 pieces to us.

// So that's our machine that cuts the frruits in pieces
}

// And now in the fruitProcessor itself, we received the mango and banana, and then we're gonna use our newly created machine to cut the receive mango and banana in two pieces. So let's do that
function fruitProcessor(mango, banana) {

  // first time we called one function inside of another function

  const mangoPieces = cutFruitPieces(mango); // and the result of calling this function, we will capture into a variable 
  // Now let do the same for the banana that we recive
  const bananaPieces = cutFruitPieces(banana);


  const juice = `Juice with ${mangoPieces} pieces of mango and ${bananaPieces} pieces of banana.`;
  return juice;
}


// now we call fruitProcessor with two and three
const result2 = fruitProcessor(2,3);  // the result of calling this function will become the string above that we return from the function.
console.log(result2); // log the result to the console.

*/

/* 
This is a very good example to illustrate the machanics of one function calling the other, but now again you might askthe following quation. 

Q: Why not simply multiply both of the input values by four and call it.?
Ans: And we can do that of course, we can say

mangoPieces = mango * 4;
bananaPieces = banana * 4;

But we not did it this way for well, multiple reasons, First the point I'm making here is that
- it's very common for one function call another function
- This is a very good example to illustrate that don't repeat yourself principle that mentioned earlier. So the dry principle
- Imagine the cutting machine would cut in three pieces and not in 4 pieces, then if did'nt have to separate cutFruitPieces function, we would have to change the code in multiple places. And this is not a problem of course with two lines of code, but we needed to cut like 20 fruits into pieces then we would have to change that in all the places and that would simply be annoying and it could also be a source of bugs/ coding mistake
- So it lots better to put that functionality into its own function, So if the fruit was not cut in three pieces all you have to do is to change it here,

function cutFruitPieces (fruit) { 
return fruit * 3; 
}

and that's it.. and this changes to 6, 9


- With time and practice you should know when you should create your own functions and when to have multiple function one calling another. So function is very important topic so keep practicing and initializing the code.

*/




/* ##################### REVIEWING FUNCTION #####################*/



// const yearsUntilRetirement1 = (birthYear, firstName) => {
//   const age1 = 2022 - birthYear;
//   const retirementAge1 = 65 - age1;
//   return `${firstName} retires in ${retirementAge1} year's... 🧓`; 
// };


/*



// In that case we simply get rid of the arrow function and write the normal function expression here

const calculateAge6 = function(year)  {  // this parameter is the local variable of each function
  return 2022 - year;
} 

// we could even hava a different variables outside of any of the functions which could also be the same parameter

// Variables names in these two different functions they do not have anything to do with one another

const yearsUntilRetirement1 = function(birthYear, firstName) {
  const age1 = calculateAge6(birthYear); // / call one function inside of another function
  // const age1 = 2022 - birthYear; // now export this functionality into another function
  const retirementAge1 = 65 - age1;

   // take the decision here based on the retirement value
   if (retirementAge1 > 0 ) { // if there are more or zero years left until retirement so we log this
    console.log(`${firstName} retires in ${retirementAge1} year's...`); // the console.log is executed before the value has returned.
    return retirementAge1; // the return statements immediately exit or immediately returns the function so there is no change this console.log code here even reached. So if we want here to execute we need to put before the return statement
   } else {
     console.log(`${firstName} has already retired. 🥳`);
     return -1;
   }

  // return `${firstName} retires in ${retirementAge1} year's...`; 
  // we can using a template string to build that string
}


console.log(yearsUntilRetirement1(1998, "Adarsh"));
console.log(yearsUntilRetirement1(1940, "Shubh")); // output will be the negative number, which means they are already retired.



*/

/* THE THREE DIFFERENT WAY OF WRITING THE FUNCTIONS,
   1. FUNCTION DECLARATION: Function that can be used before it's declared

   2. FUNCTION EXPRESSION: Essentially a function value store in a variable.

   3. ARROW FUNCTION: Great for a quick one-line function. Has no this keyword.

   but they all work in a similar way: receive input data, transform data, and then output data. It's all optional.


   Firstly, usually
   1. A function needs a function name.
   2. Then a function also has parameter and these parameters are essentially placeholders that receive input values. These are little bit like local variable of a function. Variables are defined only inside of this very function
   3. We use function to reuse pieces of code and these peaces of code are inside the funciton body. Here the function input data, it usually processed and then returned. 
   4. And by the end of the function, we usually have a return statement which is use to output a value from the function.
   5. A return statements also immediately terminates the function execution. We also say function returns
   6. And now we after calling the function, we do that using parenthesis. So we write the name of the function and with the parenthesis we call the function, because without the parenthesis a function is really just a value, but then with the parenthesis, we actually called the function. We can also say that we can run the function, invoke the function, or execute the function. All these terms are the same meaning.
   7. If the function actually has parameters, we then call this function with arguments and these arguments are the actual value of function parameters. So we use thses to the input the actual data into the function. And we can also imagine this as a replacing the placeholders that are the parameters.
   8. Then once the function has finally done its job, then all this expression will basically be replaced with the returned value

*/




/****************** INTRODUCTION TO ARRAYS IN JAVASCRIPT ******************/



// Let's now talk about our first data structure and that's gonna be arrays.

/* QUES: Let's say i want to store my friend name in a variable so that i could use them later in my program.

So with the knowledge that we have so far, this is how we would do it.
*/


// const friendName1 = "Tushar";
// const friendName2 = "Aditya";
// const friendName3 = "Avinash";



// Now this isn't really fun to do right, because imagine that we wanted to represent 10 friends and then we would have to create 10 variables, so that doesn't sound like fun.

// Instead, wouldn't it be great to essentially bundle all these values together into some bigger container? Well, that's why we have data structure in javaScript. And arrays are such a data structure.

// So an array is like a big container into which we can throw variables and then later reference them.

// And that's super important because programming is most of the time all about data. So we get data from somewhere, we store and process data and then we five some data back. And that data it has to go somewhere, So it has to be stored in some place, And for that we use data structure, just like arrays. So in case we have more, than just a single value.

/* TWO MOST IMPORTANT DATA STRUCTURE AT LEAST IN JAVASCRIPT ARE

1. ARRAYS
2. OBJECTS 

*/



/* COMMENT START



// And now let's learn all about arrays

// Istead of doing this,
const friendName1 = "Tushar";
const friendName2 = "Aditya";
const friendName3 = "Avinash";

// Lets create a variable

const friendsName = ["Tushar", "Aditya", "Avinash"] ;// we use the brackets to create a new array and in there, we can put different value separated by commas ,. and make sure these comma here is outside of the string

// And that is the absolute basics about arrays, so that's how we create one and at least that's way we use the most but there's actually another way.

console.log(friendsName);

// different way of creating an array which was using this array function.

// So you see that it's a function because we called it here basically using this parenthesis (). And we also needed to use the new keyword because otherwise it's not gonna work.

const months = new Array("Jan", "Feb", "March", "April"); 
// An array can hold as many values as we want and also values of any type that we'd like.


// But anyway, it's way more usual to just use the brackets [] like I did up here, which is called the literal syntax.

// So now we know how to create Arrays, so basically how to put elements into an array, but of course we need to have a way to get them out and for that, we use the square brackets syntax again. 

console.log(months[0]); // Arrays are zero-based, which means the first element is the element number zero. So if we want the element at position zero, then we write variable name square bracket[0], in this case months[0].

console.log(months[3]);

// We can also get the actual number of elements that is in the array.

console.log(months.length); //Output: 4, so this.length is something called a property. This section is coming when we talk about objects later. Anyway what matters, is that this is gonna be the exact amount of elements that is in the array. And it's not zero-based. It actually gives the number of element in the array. So we can use this to automatically get the last element of any array. And that is useful so that we don't have to count how many elements are in the array.

console.log(months[months.length - 1]); // and that's because months.length is not zero-based. And so we always need to subtract one from this number here.

// so what does also means inside of these brackets [months.lenth - 1], we can put any expression. It doesn't just have to be a number. So here we have this expression, and remember that an expression is something that produce a value. And so this one here [months.length - 1] is gonna calculated first. So it will compute [months.length] which is 4 and 4 - 1 is 3, And then it will get friends at position 3.

// And that's also one of the reasons why it's important that you know what is an expression and what is a statement. Because once again, we could not put a statement in here. So inside of these [] square brackets, javaScript expects an expression, not a statement.

// Anyway we got the correct element from the array, which is the element number 3. And so that means that this automatic retrieval of the last element work just fine

// And moving on, there is more stuff that we can do. So this square bracket syntax [], that we used here not only for retrieving elements from the array, but we can also change it to add elements to the array. So let's say that for some reason, I'm not longer friends with "Tushar" and that I want to replace him with some other friends. So now we can change and mutate the array in the same way

friendsName[0] = "Akash"; // I'm doing manually here again
console.log(friendsName); // now log friendName array to the console and we should already see the new array. So the element no 1 is now replaced with "Akash"

// But wait didn't I said in the function reviewing coding challenge #1, that the variables declared with const, cannot be changed. And we did declare the friendsName variable here with const, right? But I still able to change one element of the array here from "Tushar" to "Akash", right? So isn't that a contradiction.

//Well what I did'nt tell you at that time, is that only primitive values, are immutable. But an array is not a primitive value. And so we can actually always change it so we can mutate it. 

// And it works this way because of the way that javaScript stores things in memory. And we can discuss in details in other lecture or section about HOW JAVASCRIPT WORKS BEHIND THE SCENE.

// So what you need to know for now is that we can actually mutate arrays even though they were declared with const

// Now what we cannot do is to actually replace the entire Array. So we cannot do this, that would be illegal.


// friendsName = ["Shivani", "Mohan", "Shubhra"];
// console.log(friendsName);   // error coming in console


// Array can actually hold values with different types all at the same time 



const adarsh = ["Adarsh", "Tripathi", 2022 - 1998 , "Employed", ] ; // here we can actually calculate the age from other values, And that works because in each position, javaScript simply expects an expression. And if you do this, [2022 - 1998 ], so this is perfectly fine. So this will here produce a value, And so that's the value that will then be stored at position number 2 of the new array. And that also work for variables. Like this

const firstName = "Adarsh";
let adarshT = [firstName, "Tripathi", 2022 - 1998, "Coder", "Self-Employed"]; // here instead of literally writing "Adarsh" that we could use this variable name. So this would then be replaced with the actual string. 

//And actually we could even put other arrays inside of an array. So lets put the friendsName[] array here in the adarshT array[]. And then with these we have all the relevant data about adarshT in one handy data structure.

// And that's really convenient because then we don't have to create one variable for each of the data points.

adarshT = [firstName, "Tripathi", 2022 - 1998, "Coder", "Self-Employed", friendsName];
console.log(adarshT);
console.log(adarshT.length);



COMMENT END  */ 


// ******************* EXERCISE **************************


/* COMMENT START



const calcAge7 = function(birthYear) {
  return 2022 - birthYear
}

// And now let's say that we have an array of birth Years and hen we wan to calculate the ages for some of them

const ageCalcArray = [1998, 1992, 1993, 1996, 2010];

// and now we will be avle to use the calcAge7 function and then store the result of calculating the ages for some of the years into a new array. So let's see how

// Now let's see first how we could not do it.

// For example, if we wanted to use the calcAge7 function for all the elements in this array, we could not do this

const result = calcAge7(ageCalcArray); // this would be not legal and it's not gonna work because this (ageCalcArray) is an array. And if we pass this (ageCalcArry) array as an argument to the calcAge7 function it doesn't know what to do with it. Because this operation here (2022 - birthYear) expects a single values and we cannot do a number - and array.

console.log(result); // Output: NaN (Not a Number)

// So that's the result of attempting to subtract a whole array from a number

// We cannot do operations with array, but we can still use the calcAge7 function on individual elements of the array.

// So let's assume I want to calculate the ages for the first, second and last array element

const ageCalculate1 = calcAge7(ageCalcArray[0]);
const ageCalculate2 = calcAge7(ageCalcArray[1]);
const ageCalculate3 = calcAge7(ageCalcArray[ageCalcArray.length - 1]); // but I dont want to count the number of elements in the array. So used the trick, which is to first compute the length of the array and then -1 to account for the fact that the index of the array is zero based.
console.log(ageCalculate1, ageCalculate2, ageCalculate3);

// Since we started with an array, it usually a good idea, to also end up with a new array. So let's create a new array agesCalculate and now what should I put in here? Well remember how I said up here well any position of the array is an simply needs to be an expression. So something that produces a value. And as we already know this here produces a value as well



// = calcAge7(ageCalcArray[0]); // this here produces a value as well. It is an expression. So I can take this and simply put it as a position of an array element
// = calcAge7(ageCalcArray[1]);
// = calcAge7(ageCalcArray[ageCalcArray.length - 1]);



// And javaScript will then go ahead compute this value = calcAge7(ageCalcArray[0]); and place it in teh array

const agesCalculate = [
  calcAge7(ageCalcArray[0]), // here we simply put a expression value as a position of an array element. Basically we can place function calls into an array just fine, because they will produce a value.
  calcAge7(ageCalcArray[1]),
  calcAge7(ageCalcArray[ageCalcArray.length - 1]),
  2022 - 1970 // add one more expression for your reference
];
console.log(agesCalculate); // and indeed we get the three same values, then we had up here separately. No all nicely placed into this array. And this of course works, because javaScript will start by running this function calls and then placed all the results in an array afterwards.

 

COMMENT END */




/****************** BASIC ARRAY OPERATIONS (METHODS) IN JAVASCRIPT ******************/


/*

- JavaScript has some build in functions that we can basically apply directly on arrays.
- And these are called Methods, we can think of methods as array operations basically. So let's now learn some useful operations array methods.
- There are actually countless array methods in javaScipt and they are very important in javaScript


*/

const friendsName = ["Shubhrans", "Kartik", "Anurag"]; // this actually changed, so it mutated the original array, but that's no problem at all


// now let's start the method called __ push, so the push method adds elements to the end of an array.


// friendsName.push("Nikita"); // then the element that we want to add to the end of the array. 


// So __ push essentially a function and we can see that by these parenthesis. So it's a function that we call these function really attached to the friendsName [] array itself. And that's what the dot . here stands for

// So again push is a method which technically is a function, and we call that function directly on the friendsName [] array. So the push function is kind of attached to the friends array and if you're wondering why that is we will once more learn that a little bit later.

// But there is a good reason why this works and it's actually a pretty fascinating stuff .

// Since push is a functiom here, so it can also return something. So we already know that we can pass arguments into function and we did that here with "Nikita". Then the function can do some work and in this case the work that the push function does is to add the element to the array and actually the push function does return a value and that the value that it returns is the lenght of the new array in this case.

// And if want the capture the data and value so we can create a new variable for that.

const addDataEnd = friendsName.push("Nikita");
console.log(friendsName);
console.log(addDataEnd); // Indeed it is the four, so most of the time we actually don't do this, so we just push an element and call it, becuase usually we don't immediately need the length of the new array. But in case we need it, we don't need to then calculated separately, we can simply take the result of this function here and store it in a variable and then use that.



// Besides the push method, which can add element to the end of the array, ther's also method the add element to the beginning of the array, So that is the __unshift method

const addDataBeg = friendsName.unshift("Neha"); // add data to the beginning of the array element, just like the push method the unshift method also return the length of an new array.
console.log(friendsName);
console.log(addDataBeg);



// Besided the push method, and unshift menthod, we also have a methods to remove elements from arrays using pop method. Basically it is the opposite of the push method. So this means the pop will remove the last element of the array.

friendsName.pop(); // this time we don't need to passin any argument and that's because there is no information needed really to just take out the last element.

// And if we did it twice for example, which of coursewe can also do then "anurag" should also be gone


friendsName.pop();

// The pop method also return something, but this one doesn't return the length of the new array but instead, it returns the remove element. And so that can sometimes be useful.

const remArrData = friendsName.pop();
console.log(friendsName, remArrData);


// And finally, let's also remove the first element from the array using shift methods

const remFirstData = friendsName.shift(); // we didn't need any argument and once again this method will return the element that was removed
console.log(remFirstData,friendsName);


// Next up, there is very useful method that tells us in which position a certain element is in the array.

const indxArrData = friendsName.indexOf("Nikita");
console.log(indxArrData, friendsName);



// Now finally to finish this section, there is very similar method to the indexOf but which is a bit more modern and also very useful. So this one is an ES6 method and it's called __includes. So __included, instead of returning the index of the element will simply return true if the element is in the array and false if it's not.

friendsName.push(23); //remember add the value to the end of the array element

// This method actually use strict equality for this check

const inclArrData = friendsName.includes("Shubhrans");
const inclArrData1 = friendsName.includes("Kartik"); 
let inclArrData2 = friendsName.includes("23");  //Output: false,  it return false, because it is testing with strict equality, which means that it does not do type coercion. And since 23 to string is different from 23 to number it gives us false
inclArrData2 = friendsName.includes(23); // Output: true, but if I test directly to the number then it should be true
console.log(inclArrData);
console.log(inclArrData1);
console.log(inclArrData2);
console.log(friendsName);



// So we can use the __includes method to write the conditionals. So that's one of the very useful applications of this method. For example

if (friendsName.includes("Shubhrans")) { // this here returns a boolean and also you already know how the if statement works. So only if this is true, So if the array does include a string with "Shivani" only then this code is executed
console.log(`You have a friend called ${friendsName[0]}`);
}


// So that's probably the most use case of the includes method



























































