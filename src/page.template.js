function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card-deck">
                        ${team}
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

const generateManager = (Manager) => {
    let managerCard = `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${Manager.name}</h2>
            <h3 class="card-title">${Manager.id}</h3>
            <h3 class="card-title">${Manager.email}</h3>
            <h3 class="card-title">${Manager.officeNumber}</h3>
            </div>
            </div>
            `;
    return managerCard;
};

const generateEngineer = (Engineer) => {
    let engineerCard = `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${Engineer.name}</h2>
            <h3 class="card-title">${Engineer.id}</h3>
            <h3 class="card-title">${Engineer.email}</h3>
            <h3 class="card-title">${Engineer.github}</h3>
            </div>
            </div>
            `;
    return engineerCard;
};

const generateIntern = (Intern) => {
    let internCard = `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${Intern.name}</h2>
            <h3 class="card-title">${Intern.id}</h3>
            <h3 class="card-title">${Intern.email}</h3>
            <h3 class="card-title">${Intern.school}</h3>
            </div>
            </div>
            `;
    return internCard;
};
