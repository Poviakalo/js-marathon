const $btn = document.getElementById('btn-kick');
const $btnDoubleCick = document.getElementById('btn-double-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    demageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    demageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}


$btn.addEventListener('click', function() {    
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});
$btnDoubleCick.addEventListener('click', function() {    
    changeHP(random(40), character);
    changeHP(random(40), enemy);
});

// functions

function init() {
    console.log('Start Game!');   
    renderHP(character);
    renderHP(enemy);
}
function renderHP (person) {
    renderHpLife(person);
    renderProgressbarHP(person);
}
function renderHpLife (person) {         
    person.elHP.innerText = person.demageHP + '/' + person.defaultHP;    
}
function renderProgressbarHP (person) {
    person.elProgressbar.style.width = person.demageHP + '%';

}
function changeHP(count, person) {
    if (person.demageHP < count) {
        person.demageHP = 0;
        alert('Бедний ' + person.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnDoubleCick.disabled = true;
    } else {
        person.demageHP -= count;
    }    
    renderHP(person);
}
function random (num) {    
    return Math.ceil(Math.random()*num);
}

init();