const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('John', '1', 'john@email.com', 'johnsGithub');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('john@email.com');
    expect(engineer.github).toBe('johnsGithub');
});

test('gets name', () => {
    const engineer = new Engineer('John');
    expect(engineer.getName()).toBe('John');
});

test('gets id', () => {
    const engineer = new Engineer('John', '1');
    expect(engineer.getId()).toBe('1');
});

test('gets email', () => {
    const engineer = new Engineer('John', '1', 'john@email.com');
    expect(engineer.getEmail()).toBe('john@email.com');
});

test('gets github', () => {
    const engineer = new Engineer('John', '1', 'john@email.com', 'johnsGithub');
    expect(engineer.getGithub()).toBe('johnsGithub');
});