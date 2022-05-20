const Manager = require('../lib/Manager');

jest.mock('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Chris')

    expect(manager.name).toBe('Chris')
    expect(manager.id).toBe(expect.any(Number))
    expect(manager.email).toBe(expect.any(Number))
    expect(manager.officeNumber).toBe(expect.any(Number))

 });

// test('', () => {

// });

// test('', () => {

// });