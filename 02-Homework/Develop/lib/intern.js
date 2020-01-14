const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(school) {

        super(school);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = {
    Intern : Intern, //export this class
    Employee: Employee // and export parent class too!
  }