const Manager = require('../lib/Manager.js');
test('creates a manager', () => {
    const manager = new Manager('Joe', 454545, 'joe@something.com', 'B456');
    expect(manager.name).toBe('Joe');
    expect(manager.id).toBeGreaterThanOrEqual(1);
    expect(manager.email).toBe('joe@something.com');
    expect(manager.officeNumber).toBe('B456');
});
test("checks employee's role", () => {
    const manager = new Manager('Joe', 454545, 'joe@something.com', 'B456');
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})