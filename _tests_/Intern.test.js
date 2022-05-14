const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('John', '1', 'john@email.com', 'johnsSchool');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('john@email.com');
    expect(intern.school).toBe('johnsSchool');
});

test('gets intern name', () => {
    const intern = new Intern('John');
    expect(intern.getName()).toBe('John');
});

test('gets intern id', () => {
    const intern = new Intern('John', '1', 'john@email.com', 'johnsSchool');
    expect(intern.getId()).toBe('1');
});

test('gets intern email', () => {
    const intern = new Intern('John', '1', 'john@email.com', 'johnsSchool');
    expect(intern.getEmail()).toBe('john@email.com');
});

test('gets intern school', () => {
    const intern = new Intern('John', '1', 'john@email.com', 'johnsSchool');
    expect(intern.getSchool()).toBe('johnsSchool');
});