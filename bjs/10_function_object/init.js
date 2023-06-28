
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

document.querySelector('#reload').addEventListener('click', function() {
    startGenerate();
});