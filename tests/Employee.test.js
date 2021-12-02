const Employee = require('../lib/Employee');

test('Set Name', ()=>{
    const testObject = new Employee('Bob', '10', 'bob@gmail.com', 'Employee')
    console.log(testObject)
    expect(testObject.name).toBe('Bob')
})

test('getId Function Returns: 10', ()=>{
    const testObject = new Employee('Bob', '10', 'bob@gmail.com', 'Employee')
    console.log(testObject.getId())
    expect(testObject.getId()).toBe('10')
})

test('getEmail Function Returns: bob@gmail.com', ()=>{
    const testObject = new Employee('Bob', '10', 'bob@gmail.com', 'Employee')
    console.log(testObject.getEmail())
    expect(testObject.getEmail()).toBe('bob@gmail.com')
})

test('getRold Function Returns: Employee', ()=>{
    const testObject = new Employee('Bob', '10', 'bob@gmail.com', 'Employee')
    expect(testObject.getRole()).toBe('Employee')
})