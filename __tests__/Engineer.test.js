const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer.js');

test('get Github username from class Engineer', () => {
const github = "Jason1234";
const newEngineerGithub = new Engineer('Jason', '001', 'Jason001@gmail.com', github);

expect(newEngineerGithub.github).toBe(github)
});

test('get Github username from getGithub() function', () => {
const github = "Jason1234";
const newEngineerGithub = new Engineer('Jason', '001', 'Jason001@gmail.com', github);
    
expect(newEngineerGithub.getGithub()).toBe(github)
});

test('', () => {

});

