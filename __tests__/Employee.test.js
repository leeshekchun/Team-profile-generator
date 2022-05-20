const Employee = require('../lib/Employee');

test('create employee name in Employee function', () => {
const name = 'Chris';
const newEmploy = new Employee(name);

expect(newEmploy.name).toBe('Chris');
});

test('create employee ID in Employee function', () => {
const id = '007';
const newEmployeeID = new Employee('Chris', id);

expect(newEmployeeID.id).toBe(id)
})

test('create employee email in Employee fucntion', () => {
const email = 'chris007@gmail.com'
const newEmployeeEmail = new Employee('Chris', '007', email);

expect(newEmployeeEmail.email).toBe(email)
})

test('gets employee name from getName() function', () => {
    const name = 'Chris';
    const newEmploy = new Employee(name);
    
    expect(newEmploy.getName()).toBe('Chris');
})

test('get employee ID from getID() function', () => {
    const id = '007';
    const newEmployeeID = new Employee('Chris', id);
    
    expect(newEmployeeID.getID()).toBe(id)
})

test('get employee Email from getEmail() function', () => {
    const email = 'chris007@gmail.com';
    const newEmployeeEmail = new Employee('Chris', '007', email);
    
    expect(newEmployeeEmail.getEmail()).toBe(email)
})

test('get employee role from getRole() function', () => {
    const role = 'Employee';
    const newEmployeeRole = new Employee('Chris', '007', 'chris007@gmail.com', role);

    expect(newEmployeeRole.getRole()).toBe(role)
})
