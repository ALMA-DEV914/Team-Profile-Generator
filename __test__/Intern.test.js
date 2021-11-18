const Intern = require("../lib/Intern");

test('create school from object', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com'  
    const school = 'newschool'
    const employee = new Intern(name, id, email, school)

    expect(employee.school).toBe(school)
})


test('test getSchool()', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com'  
    const school = 'newschool'
    const employee = new Intern(name, id, email, school)

    expect(employee.getSchool()).toBe(school);
})

test('change getRole to render Intern', () => {
    const name = 'newname'
    const id = 1
    const email = 'email@any.com'  
    const school = 'newschool'
    const role = 'Intern'
    const employee = new Intern(name, id, email, school)
    expect(employee.getRole()).toBe(role);
})