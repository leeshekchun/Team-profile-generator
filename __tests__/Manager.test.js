const Manager = require('../lib/Manager');

test('get office number from class Manager', () => {
const officeNumber = '1234';
const newManagerOfficeNumber = new Manager('Chris', '008', 'Chris008@@gmail.com', officeNumber);

expect(newManagerOfficeNumber.officeNumber).toBe(officeNumber)
 });