const Intern = require('../lib/Intern');
test("creates an Intern object", () => {
    const intern = new Intern('John', "101010", 'john@something.com', 'AAA');
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('101010');
    expect(intern.email).toBe('john@something.com');
    expect(intern.school).toBe('AAA');
});
test("checks Intern's school", () => {
    const intern = new Intern('John', "101010", 'john@something.com', 'AAA');
    expect(intern.getSchool()).toEqual(expect.stringContaining('AAA'));
});
test("checks Intern's role", () => {
    const intern = new Intern('John', "101010", 'john@something.com', 'AAA');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});