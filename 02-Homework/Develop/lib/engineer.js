const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(github, githubusername) {

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

module.exports = {
    Engineer : Engineer, //export this class
    Employee: Employee // and export parent class too!
  }