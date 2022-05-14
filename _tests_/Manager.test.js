const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('John', '1', 'john@email.com', 'johnsOfficeNumber');

    expect(manager.name).toBe('John');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('john@email.com');
    expect(manager.officeNumber).toBe('johnsOfficeNumber');
});

test('gets name', () => {
    const manager = new Manager('John', '1', 'john@email.com', 'johnsOfficeNumber');
    expect(manager.getName()).toBe('John');
});

test('gets id', () => {
    const manager = new Manager('John', '1', 'john@email.com', 'johnsOfficeNumber');
    expect(manager.getId()).toBe('1');
});

test('gets email', () => {
    const manager = new Manager('John', '1', 'john@email.com', 'johnsOfficeNumber');
    expect(manager.getEmail()).toBe('john@email.com');
});

test('gets office number', () => {
    const manager = new Manager('John', '1', 'john@email.com', 'johnsOfficeNumber');
    expect(manager.getOfficeNumber()).toBe('johnsOfficeNumber');
});
