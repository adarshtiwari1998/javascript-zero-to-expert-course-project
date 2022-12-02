/****************** STRICT MODE IN JAVASCRIPT ******************/
'use strict';

const xyz = '23'; // automatically changed my double quotes "" back to single quote ''/ So that't the thing we need to configure by rewriting the prettier object in .prettierrc file.
if (x === 23) console.log(23);

// Prettier does by default is something in arrow functions

const calcAge = birthYear => 2022 - birthYear; // but now watch happens when I give it to save, so you see that prettier actually wrapped the single parameter "birthYear" here in parenthesis. However it actually not a good way. So for just one parameter, it actually looks good without the parenthesis. So that's the another thing that we configure in .prettierrc file. And remember that we enabled "format on save" options checkbox, so then all this formattin taked effect whenever we save a file.

// So you can take a look at the entire list here "https://prettier.io/docs/en/options.html" if you want, and then we can change your own configuration to match your preferred coding style.

// So whenever we have to log something, we have to write "console.log()" and put the code between the parenthesis and do all this work. But in vs code, we can configure snippets, which can take this work away from us. So let me show how, you can go in menu option  - file - preferences - confifure user snippet - create New Global Snippets file - give any name you like. And here we can define a couple of snippets, and remember that the snippets that we want to define is simply one in your case that automatically write "console.log()" for us.

console.log(xyz);
