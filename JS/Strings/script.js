let userInfoOutput = document.getElementById('main');

let user = {
    firstname: 'Tomas',
    lastname: 'Karalius'
}

userInfoOutput.innerHTML = `<h2>User information</h2>
<p>Vartotojo vardas yra ${user.firstname}, o pavardė ${user.lastname}.</p>`;