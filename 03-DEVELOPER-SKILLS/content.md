
####  Basic Vs code setting for development environment

- Set Prettier as your default formatter in  vs code by going - setting - format - choose Prettier. (And Prettier is an opinionated code formatter. Means if you use the tool, we have a strong opinion.)
"https://prettier.io/docs/en/options.html"

- Set Format on save checkbox by going - setting - format on save - click on checkbox option 

- So you can take a look at the entire list here "https://prettier.io/docs/en/options.html" if you want, and then we can change your own configuration to match your preferred coding style.

- So whenever we have to log something, we have to write "console.log()" and put the code between the parenthesis and do all this work. But in vs code, we can configure snippets, which can take this work away from us. So let me show how you can do this, you can go in vs code menu option - file - preferences - configure user snippet - create New Global Snippets file - give any name you like. And here we can define a couple of snippets, and remember that the snippets that we want to define is simply one in your case that automatically write "console.log()" for us. Here how you define snippets:

~~~

 "Print to console": {
     "scope": "javascript,typescript",  // here it is the name of the snippets
     "prefix": "cl", // this is the command that we basically trigger the snippet, and here i like to use "cl". So whenever we write cl in the code, it will then expand that to console.log(). 

    "body": [

      // then here is the code that will actually be written, And here get rid of this second line of code, and in between the parenthesis "console.log('$1');", also get rid of all of this. Because I found that is the best way to make this work. And it's not really important that you understand how it works. This is just the recipe that I want you to follow here, just to make our coding life a litle bit easier. And once you save and get back to your script and write cl, the console.log() function automatically written with the help of this prefix "cl".

		  // But here we can also define like this "console.log($1);" with just the way it was before, then this wiil place the cursor between the parenthesis. But then I founf that when you do that the automcomplete in vs code does no longer work.

			"console.log();",
			// "$2"
    ],
    "description": "Log output to console"
   } 
  
 ~~~

- (OPTIONAL) Install TODO Highlight extension for highlighting your comments in your code, and add the json object below, by going through file - preferences - setting - and click on open setting json icon and paste the object.



 ~~~
  {

  "todohighlight.isCaseSensitive": true,
   "todohighlight.keywords": [
    {
      "text": "VIDEO",
      "color": "#333",
      "backgroundColor": "#3498db"
    },
    {
      "text": "FIXME",
      "color": "#333",
      "backgroundColor": "#e67e22"
    },
    {
      "text": "LEC",
      "color": "#333",
      "backgroundColor": "#f1c40f"
    },
    {
      "text": "BUG",
      "color": "#333",
      "backgroundColor": "#e74c3c"
    },
    {
      "text": "TODO",
      "color": "#333",
      "backgroundColor": "#2ecc71"
    }
 ] 

 }

 ~~~


- In the real world no professional developers reloads their browsers manually. So everyone uses some kind of toll to do that.
> So to make our life easier, we wll now install such a development tool which is called live server. And we can use live server in two different ways:
>> First, we can install a vs code extension called [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or second 
>> Second, we can use a bit of a more professional workflow using [Node.js](https://nodejs.org/en/) and so-called npm package.

- So like i said there is more professional way of running live server, which by using something called [Node.js](https://nodejs.org/en/), which is a javaScript runtime that we can install on our computers.

> So first install the node.js and then use the "npm package called live server" there.

- So node.js is a way of running javaScript outside of the browsers, but also it's a way of running development tools, just like the live server that we want to install now.
> After installing node.js, check the version of the node.js in so-called terminal by using command `node -v`. If you see the number that means you have successfully installed nodejs.

> After this number here, you can now write `npm install live-server -g`. In case if you are using Mac then start with the command with `sudo` then `npm install live-server -g`.

- And `npm` is basically a node package manager, which is basically a program to download tools. And here `-g` means it should be installed globally on your computer.

> After installing this package, you can enter `live-server` and hit enter. 

- so whenever you run the live server in some folder, that folder will then be opened in the browser. And whenever we open a folder in the browsers it will then open the index.html file by default. So that's why we alwayse have an index.html file in any folder.

- So anyfile changes in this folder now or whenever will trigger a reload. 

- So now we established a real world web development environment or workflow.



