const Engineer = require('../lib/Engineer');

test('Set Github', ()=>{
    const testObject = new Engineer('John', '11', 'john@gmail.com', 'john@github.com')
    console.log(testObject)
    expect(testObject.github).toBe('john@github.com')
})

test('getRole Function Returns: Engineer', ()=>{
    const testObject = new Engineer('John', '11', 'john@gmail.com', 'john@github.com')
    console.log(testObject.getRole())
    expect(testObject.getRole()).toBe('Engineer')
})

test('getGithub Function Returns: Github', ()=>{
    const testObject = new Engineer('John', '11', 'john@gmail.com', 'john@github.com')
    expect(testObject.getGithub()).toBe('Github: john@github.com')
})