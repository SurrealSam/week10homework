const fs = require("fs");


'use strict';
var inquirer = require('inquirer');

console.log('Hi, welcome to Employee Manager');

var questions = [
    {
        type: 'list',
        name: 'choice',
        message: 'What type of Employee would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern', 'None, Save and Exit']
    },
    {
        type: 'input',
        name: 'office',
        message: 'Office number?',
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number,
        when: function (answers) {
            return answers.choice === 'Manager';
        }
    },
    {
        type: 'input',
        name: 'githubusername',
        message: 'Github username?',
        when: function (answers) {
            return answers.choice === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github URL?',
        when: function (answers) {
            return answers.choice === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Name of school?',
        when: function (answers) {
            return answers.choice === 'Intern';
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the empolyee's email address?"
    }
];



inquirer.prompt(questions).then(answers => {
    console.log('\nNew Employee Added:');
    console.log(JSON.stringify(answers, null, '  '));
    fs.readFile('./output/team.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        
        let github = '';
        let githubusername = '';
        let school = '';
        let office = '';
        let src = '';

        if (answers.choice === 'Manager') {
            src = 'src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Business-Manager-icon.png"';
            office = `<p class="card-text"> Office Number: ` + answers.office + `</p>`;
        }
        if (answers.choice === 'Engineer') {
            src = 'src="https://previews.123rf.com/images/maximon4ik/maximon4ik1705/maximon4ik170500040/78459351-gear-icon-vector-flat-design.jpg"';
            githubusername = `<p class="card-text"> Github Username: ` + answers.githubusername + `</p>`;
            github = `<p class="card-text"> Github URL: ` + answers.github + `</p>`;
        }
        if (answers.choice === 'Intern') {
            src = 'src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJXYBWiRbMLqNRRCkmQwrp2OAfuKbzAcpm6pxMbihFI4waw7HX"';
            school = `<p class="card-text"> School: ` + answers.school + `</p>`;
        }
        var toPrepend = `<div class="card" style="width: 18rem;">
        <img class="card-img-top"`
            + src +
            `alt = "Card image cap" >
            <div class="card-body">
                <h5 class="card-title">` + answers.name + `</h5>
                <p class="card-text">` + answers.choice + `</p>
                <p class="card-text">` + answers.id + `</p>
                <p class="card-text">` + answers.email + `</p>
                ` + office + school + github + githubusername + `
            </div>
    </div > `;
        var result = data.replace(/\<div class="row" id="root">/g, '<div class="row" id="root">' + toPrepend);

        fs.writeFile('./output/team.html', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
});
