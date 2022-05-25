// create card body
const cardManager = manager => {
    return `
  <div id="cardHeader">
    <div class="name">
      <h3>${ manager.name }</h3>
    </div>

    <div id="cardTitle">
      <h3>Manager</h3>
    </div>
  </div>

  <div class="cardBody">
    <div>
      <p class="">ID: ${ manager.id }</p>
      <a class="" href="mailto:${manager.email}">Email: ${manager.email}</a>
      <p class="">Office number: ${manager.officeNumber}</p>
    </div>
  </div>    
`;
};

const cardIntern = intern => {
    return `
    <div>
    <div class="cardHeader">
    <div class="name">
      <h3>${ intern.name }</h3>
    </div>

    <div class="cardTitle">
      <h3>Intern</h3>
    </div>
  </div>

  <div class="cardBody">
    <div>
      <p class="">ID: ${ intern.id } </p>
      <a class="" href="mailto:${intern.email}">Email: ${intern.email}</a>
      <p class="">School: ${intern.school}</p>
    </div>
  </div>      
        
`;
};

const cardEngineer = engineer => {
    return `
    // put a column
    <div id="cardHeader">
    <div class="name">
      <h3>${ engineer.name }</h3>
    </div>

    <div id="cardTitle">
      <h3>Engineer</h3>
    </div>
  </div>

  <div class="cardBody">
    <div>
      <p class="">ID: ${ engineer.id }</p>
      <a class="" href="mailto:${engineer.email}">Email: ${engineer.email}</a>
      <a class="" href="https://github.com/${engineer.github}">${engineer.github}</a>
    </div>
  </div>     
`;
};

// export function to generate entire page
module.exports = templateData => {
let card = ''

  for (let teamMember of templateData) {
      console.log(teamMember.getRole())
      // if conditional for getRole()
      if (teamMember.getRole() === "Engineer") {
        card += cardEngineer(teamMember)
      } else if (teamMember.getRole() === "Intern") {
        card += cardIntern(teamMember)
      } else if (teamMember.getRole() === "Manager") {
        card += cardManager(teamMember)
      }
  } 

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
// Import Bootstrap
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
      <title>Team Profile Generator</title>

    </head>
    
    <body>
      <header class="container">
        <div>
          <h1>Team Profile Generator</h1>
        </div>
      </header>

      <main class="container">

        <div class="container">
          <div class="row">
              ${ card }
          </div>
        </div>

      </main>

    </body>
    </html>
    `;
};