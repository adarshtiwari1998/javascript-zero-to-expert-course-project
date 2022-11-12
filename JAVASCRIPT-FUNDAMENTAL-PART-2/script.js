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
