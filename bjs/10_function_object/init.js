
function startGenerate(){
    const initPerson = personGenerator.getPerson();

    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthYearOutput').innerText = initPerson.birthdate;
    document.getElementById('majorOutput').innerText = initPerson.major;
}

window.onload = function() {
    startGenerate();
};


document.querySelector('#generate').addEventListener('click', function() {
    startGenerate();
});

document.querySelector('#clear').addEventListener('click', function() {
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('majorOutput').innerText = '';
});