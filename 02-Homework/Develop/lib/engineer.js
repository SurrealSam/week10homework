const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github, githubusername) {

        super(github, githubusername);

        this.github = github;
        this.githubusername = githubusername;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;