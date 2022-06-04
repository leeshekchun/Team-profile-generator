// create card body
const cardManager = (manager) => {
  return `
    <div class="col-4">
    <div class="card" style="width: 20rem;">
    <div class="card-body text-center">
      <h3 class="card-header">${manager.name}</h3>
      <h3 class="card-header font-italic">Manager</h3>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:c">${manager.email}</a></li>
      <li class="list-group-item">Office Number: <a href="tel: ${manager.officeNumber}">${manager.officeNumber}</a></li>
      </ul>
    </div>
  </div>
  </div>
`;
};

const cardIntern = (intern) => {
  return `
    <div class="col-4">
    <div class="card" style="width: 20rem;">
    <div class="card-body text-center">
      <h3 class="card-header">${intern.name}</h3>
      <h3 class="card-header font-italic">Intern</h3>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:c">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
  </div>
  </div>  
`;
};

const cardEngineer = (engineer) => {
  return `
<div class="col-4">       
<div class="card" style="width: 20rem;">
<div class="card-body text-center">
  <h3 class="card-header">${engineer.name}</h3>
  <h3 class="card-header font-italic">Engineer</h3>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${engineer.id}</li>
  <li class="list-group-item">Email: <a href="mailto:c">${engineer.email}</a></li>
  <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
  </ul>
</div>
</div>
</div>
`;
};

// export function to generate entire page
module.exports = (templateData) => {
  let card = "";

  for (let teamMember of templateData) {
    console.log(teamMember.getRole());
    // if conditional for getRole()
    if (teamMember.getRole() === "Engineer") {
      card += cardEngineer(teamMember);
    } else if (teamMember.getRole() === "Intern") {
      card += cardIntern(teamMember);
    } else if (teamMember.getRole() === "Manager") {
      card += cardManager(teamMember);
    }
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
      <title>Team Profile Generator</title>
    </head>
    
    <body>
      <header>
        <h1 class="p-5 h-100 text-center bg-danger text-white">My Team</h1>
      </header>

      <main>
        <div class="container">
          <div class="row">
              ${card}
          </div>
        </div>
      </main>

    </body>
    </html>
    `;
};
