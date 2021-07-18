const Engineer = require('../lib/Engineer');
test('creates an Engineer object', () => {
    const engineer = new Engineer('Marcus', "34234", 'marcus@something.com', 'thomaslee');
    expect(engineer.name).toBe('Marcus');
    expect(engineer.id).toBe('34234');
    expect(engineer.email).toBe('marcus@something.com');
    expect(engineer.github).toBe('thomaslee');
});
test("checks an Engineer's github", () => {
    const engineer = new Engineer('Marcus', "34234", 'marcus@something.com', 'thomaslee');
    expect(engineer.getGithub()).toEqual(expect.stringContaining('thomaslee'));
});
test("checks an Engineer's role", () => {
    const engineer = new Engineer('Marcus', "34234", 'marcus@something.com', 'thomaslee');
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});