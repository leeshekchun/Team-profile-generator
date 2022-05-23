const Intern = require('../lib/Intern');

jest.mock('../lib/Intern.js')

test('get school name from class Intern', () => {
const school = 'Harvard';
const newInternSchool = new Intern("Jack", "002", "Jack002@gmail.com", school);

expect(newInternSchool.school).toBe(school);
});

test('get school name from getSchool() function', () => {
const school = 'Harvard';
const newInternSchool = new Intern("Jack", "002", "Jack002@gmail.com", school);
    
expect(newInternSchool.getSchool()).toBe(school);
});
