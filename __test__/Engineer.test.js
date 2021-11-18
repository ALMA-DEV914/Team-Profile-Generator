const Engineer = require('../lib/Engineer')

 
test('get github username', () => {
    const name = "newname"
    const id = 1
    const email = 'any@any.com'
    const github = 'username'
    const employee = new Engineer(name, id, email, github)

    expect(employee.github).toBe(github);
});

test('test getGithub', () => {
    const name = "newname"
    const id = 1
    const email = 'any@any.com'
    const github = 'username'
    const employee = new Engineer(name, id, email, github)

    expect(employee.getGithub()).toBe(github);
});

test('test getRole for an engineer', () => {
    const name = "newname"
    const id = 1
    const email = 'any@any.com'
    const github = 'username'
    const role = 'Engineer'
    const employee = new Engineer(name, id, email, github)

    expect(employee.getRole()).toBe(role);
})