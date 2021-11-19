const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")

let teamMembers = '';

const engineerHTML = (member) => {
    return `
    <div class="column col-3 my-5">
    <div class="card text-center mx-3">
      <div class="card-header my-4 mx-2">
      <img class="card-img-top" src="https://stgluvias.org.uk/wp-content/uploads/2020/06/vacancy-avatar.png" alt="image">
          <h2 class="card-title text-light">${member.name }</h2>
          <h3 class="card-title" id="engineer">${member.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${member.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${member.github}" target="_blank" rel="noopener noreferrer">github</a></li>
          </ul>
      </div>
    </div>
</div> 
    `;
};

const internHTML = (member) => {
  return `
  <div class="column col-3 my-5">
    <div class="card text-center mx-3">
      <div class="card-header my-4 mx-2">
      <img class="card-img-top" src="https://stgluvias.org.uk/wp-content/uploads/2020/06/vacancy-avatar.png" alt="image">
          <h2 class="card-title text-light">${member.name }</h2>
          <h3 class="card-title" id="intern">${member.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${member.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
              <li class="list-group-item">School: ${member.school}</li>
          </ul>
      </div>
    </div>
</div>  
    `;
};
const managerHTML = (member) => {
    return `
    <div class="column col-3 my-5">
      <div class="card text-center mx-3 ">
        <div class="card-header my-4 mx-2">
        <img class="card-img-top" src="https://stgluvias.org.uk/wp-content/uploads/2020/06/vacancy-avatar.png" alt="image">
            <h2 class="card-title text-light">${member.name }</h2>
            <h3 class="card-title" id="manager">${member.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item">Office: ${member.office}</li>
            </ul>
        </div>
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
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/src/style.css">
    </head>
    
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-4">
        <h1 class="page-title py-4 px-3 text-center"> Team Builders</h1>
        <p>Software Workforce 2021</p>
      </div>
    </header>
    <main class="row mx-4 my-4">
    ${teamMembers}
        </main>
  </body>
</html>
    `;
}


module.exports = generateHTML;
