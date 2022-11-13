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


function kurtas1 () {
  console.log("My name is Adarsh..."); // somewhere in our program we need to reuse this line of code multiple times, so that's why we put it in a function. So we can created a function and now we can use it as many times as we want.

}

// so to use a function, we simply write the function name followed by parenthesis and that's actually it

kurtas1(); // and this process here is basically using the function is called "invoking the function, running the function or calling the function"

kurtas1(); // we can run or use this function as many times as we want and each time that we call this function like this then the code that is in the function will get executed
kurtas1();

// we just wrote our very first function and its already working


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

const mangoJuice = fruitProcessor (4, 5); // we called fruit processor function here with two arguments 4 and 5 and these arguments are the specific, So the actual values of the functions parameters which are "mango" and "banana". And So when the function is running now, "mango" will become 4 and "banana" will be 5. So then we use these values to build this juice string and then we return that value from the function and what that means is that basically the result of calling this function will be the juice value that was just returned. And then we need to save the value somewhere, we need to capturing it, and we do that by basically saving it into this mango juice variable and then we can simply log that value to the console, ofcourse we could have also directly logged it to the console.
console.log(mangoJuice); // now we get juice with 4 mango and 5 banana.


console.log(fruitProcessor(4, 5));// now the fruitprocessor function is executed twice, only in this case we did not capture the value into any variable, we simply log the result of running this function to the console directly.

// Now thanks to the power of function we cam reuse the function with different input values and then get a different output.


const mangoBananaJuice = fruitProcessor(2, 4); // we are defining specific values here, which are the arguments, which will get passed into the function here as these parameters this one [function fruitProcessor(mango, banana)]

console.log(mangoBananaJuice);

// Essentially what we did here was to create a very generic function 

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















