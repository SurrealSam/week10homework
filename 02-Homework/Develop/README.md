# week10homework

This is a node app that will allow you to add different members to your team using inquirer to input information and then appending that info to an html page. It's not pretty but it works.

Step 1) NPM Install
Step 2) node app.js
Step 3) Open team.html in browser
Step 4) Currently no way to delete members through the app. Will need to just delete cards from html.

I tried to use a recursive version of inquirer but their example code wouldn't even work, and it is not even version 1.0, so I'm guessing that is just unusable. This unfortuantely made me have to go back to entering one employee at a time.

I ended up using regex to parse the html file at the id="root" and append to that location each time.