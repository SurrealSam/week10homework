const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(officeNumber) {

        super(officeNumber);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = {
    Manager : Manager, //export this class
    Employee: Employee // and export parent class too!
  }