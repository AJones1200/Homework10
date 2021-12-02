const Manager = require('../lib/Manager');

test('Set Office Number', ()=>{
    const testObject = new Manager('Jenny', '12', 'lori@gmail.com', '770-867-5309')
    console.log(testObject)
    expect(testObject.officeNumber).toBe('770-867-5309')
})

test('getRole Function Returns: Manager', ()=>{
    const testObject = new Manager('Jenny', '12', 'lori@gmail.com', '770-867-5309')
    console.log(testObject.getRole())
    expect(testObject.getRole()).toBe('Manager')
})

