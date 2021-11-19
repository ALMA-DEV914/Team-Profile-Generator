const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")

let teamMembers = '';

const engineerHTML = (member) => {
    return `
    <div class="card col-4 text-center mx-4 bg-dark">
      <div class="card-header bg-primary my-4">
          <h2 class="card-title text-light">${member.name }</h2>
          <h3 class="card-title">${member.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${member.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${member.github}" target="_blank" rel="noopener noreferrer">github</a></li>
          </ul>
      </div>
    </div>
      
    `;
};

const internHTML = (member) => {
  return `
    <div class="card col-4 text-center mx-4 bg-dark">
      <div class="card-header bg-primary my-4">
          <h2 class="card-title text-light">${member.name }</h2>
          <h3 class="card-title">${member.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${member.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
              <li class="list-group-item">School: ${member.school}</li>
          </ul>
      </div>
    </div>
      
    `;
};
const managerHTML = (member) => {
    return `
      <div class="card col-4 text-center mx-4 bg-dark">
        <div class="card-header bg-primary my-4">
            <h2 class="card-title text-light">${member.name }</h2>
            <h3 class="card-title">${member.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item">Office: ${member.office}</li>
            </ul>
        </div>
      </div>
        
      `;
  };
  
  const generateHTML= (myTeam) =>{
      myTeam.forEach(member => {
          if(member.getRole() === 'Engineer'){
              let engineer = engineerHTML(member)
              teamMembers += engineer
      } else if(member.getRole() === 'Intern'){
          let intern =   internHTML(member)
          teamMembers += intern
      } else{
          let manager = managerHTML(member)
          teamMembers += manager
      }
  } 
      )
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    
    </head>
    
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-4 bg-dark">
        <h1 class="page-title text-light bg-danger py-5 px-3 text-center">My Team</h1>
      </div>
    </header>
     <main class="container d-flex justify-content-center my-4">
        
    ${teamMembers}
        </main>
  </body>
</html>
    `;
}


module.exports = generateHTML;
