"use strict";
// ========================
// 🧪 TypeScript HR Lab Starter
// ========================
// TODO: 1. Define enum Role
var Role;
(function (Role) {
    Role["Employee"] = "Employee";
    Role["Manager"] = "Manager";
})(Role || (Role = {}));
// TODO: 3. Define abstract class User
class User {
    id;
    name;
    email;
    password;
    createdAt;
    constructor(name, email, password) {
        this.id = HR.generateUserId();
        this.name = name;
        this.password = password;
        this.createdAt = new Date();
        if (!HR.isEmailValid(email)) {
            throw new Error("Invalid email format");
        }
        this.email = email;
    }
    authenticate(email, password) {
        return this.email === email && this.password === password;
    }
}
// TODO: 4. Define Department class
class Department {
    name;
    employees;
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getDepartmentSize() {
        return this.employees.length;
    }
}
// TODO: 5. Define Employee class
class Employee extends User {
    _salary;
    department;
    constructor(name, email, password, salary, department) {
        super(name, email, password);
        this._salary = salary;
        this.department = department;
        this.department.addEmployee(this);
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 3000) {
            throw new Error("Salary cannot be less than 3000");
        }
        this._salary = value;
    }
    get netSalary() {
        return this._salary - HR.calculateTax(this._salary);
    }
    promote(percentage) {
        if (percentage <= 0) {
            throw new Error("Percentage must be greater than 0");
        }
        this._salary += this._salary * (percentage / 100);
    }
    getRole() {
        return Role.Employee;
    }
}
// TODO: 6. Define Manager class
class Manager extends Employee {
    team;
    constructor(name, email, password, salary, department) {
        super(name, email, password, salary, department);
        this.team = [];
    }
    addEmployeeToTeam(employee) {
        this.team.push(employee);
    }
    removeEmployeeFromTeam(empId) {
        const initialLength = this.team.length;
        this.team = this.team.filter(emp => emp.id !== empId);
        if (this.team.length === initialLength) {
            console.log(`Employee with ID ${empId} not found in team.`);
        }
    }
    getTeamReport() {
        return HR.generateReport(this.team);
    }
    getRole() {
        return Role.Manager;
    }
}
// TODO: 7. Define HR utility class
class HR {
    static generateUserId() {
        return Math.floor(Math.random() * 10000);
    }
    static isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    static calculateTax(salary) {
        if (salary < 3000) {
            throw new Error("Salary must be at least 3000 to calculate tax");
        }
        return salary * 0.1; // 10% tax
    }
    static generateReport(users) {
        return users.map(user => {
            return `${user.id} {user.name} (${user.getRole()}): ${user.email}`;
        });
    }
}
// Final test scenario can be written here...
let sw = new Department("Software");
let emp1 = new Employee("Mohab", "adsf@gmail.com", "1234", 5000, sw);
let emp2 = new Employee("Ahmed", "fda@gmail.com", "1234", 6000, sw);
console.log("Department Size after adding 2 emps:", sw.getDepartmentSize());
let emp3 = new Employee("Ali", "adsf@gmail.com", "1234", 7000, sw);
let emp4 = new Employee("Sara", "sara@gmail.com", "1234", 8000, sw);
console.log("Department Size after adding 4 emps:", sw.getDepartmentSize());
console.log("Employee 1 Net Salary:", emp1.netSalary);
emp1.promote(10);
console.log("Employee 1 Net Salary after promotion:", emp1.netSalary);
console.log("Employee 2 Salary:", emp2.salary);
emp2.salary = 6500;
console.log("Employee 2 Salary after update:", emp2.salary);
console.log("Employee 3 Role:", emp3.getRole());
let manager = new Manager("Mohamed", "mohamed@gmail.com", "1234", 10000, sw);
manager.addEmployeeToTeam(emp1);
manager.addEmployeeToTeam(emp2);
manager.addEmployeeToTeam(emp3);
manager.addEmployeeToTeam(emp4);
console.log("Team Report:");
console.log(manager.getTeamReport());
manager.removeEmployeeFromTeam(emp2.id);
console.log("Updated Team Report after removing emp2:");
console.log(manager.getTeamReport());
console.log("Manager Role:", manager.getRole());
