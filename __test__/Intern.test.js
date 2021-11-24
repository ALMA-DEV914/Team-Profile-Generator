// call the file path associated with this test
const Intern = require("../lib/Intern");
// create a test for the school value of the object
test('create school from object', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com'  
    const school = 'newschool'
    const employee = new Intern(name, id, email, school)

    expect(employee.school).toBe(school)
})

// create a test for the function to get the school
test('test getSchool()', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com'  
    const school = 'newschool'
    const employee = new Intern(name, id, email, school)

    expect(employee.getSchool()).toBe(school);
})
// create a test to get the role of the object
test('change getRole to render Intern', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com'  
    const school = 'newschool'
    const role = 'Intern'
    const employee = new Intern(name, id, email, school)
    expect(employee.getRole()).toBe(role);
})