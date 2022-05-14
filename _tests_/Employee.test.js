const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Jane', '1', 'jane@email.com');

    expect(employee.name).toBe('Jane');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jane@email.com');
});

test('gets name', () => {
    const employee = new Employee('John');
    expect(employee.getName()).toBe('John');
});

test('gets id', () => {
    const employee = new Employee('John', '1');
    expect(employee.getId()).toBe('1');
});

test('gets email', () => {
    const employee = new Employee('John', '1', 'john@email.com');
    expect(employee.getEmail()).toBe('john@email.com');
});

test('gets role', () => {
    const employee = new Employee('John', '1', 'john@email.com');
    expect(employee.getRole()).toBe('Employee');
});