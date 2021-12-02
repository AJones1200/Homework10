const Intern = require('../lib/Intern');

test('Set School', ()=>{
    const testObject = new Intern('Sally', '9', 'sally@gmail.com', 'Northwestern')
    console.log(testObject)
    expect(testObject.school).toBe('Northwestern')
})

test('getRole Function Returns: Intern', ()=>{
    const testObject = new Intern('Sally', '9', 'sally@gmail.com', 'Northwestern')
    console.log(testObject.getRole())
    expect(testObject.getRole()).toBe('Intern')
})

test('getSchool Function Returns: School', ()=>{
    const testObject = new Intern('Sally', '9', 'sally@gmail.com', 'Northwestern')
    expect(testObject.getSchool()).toBe('School: Northwestern')
})
