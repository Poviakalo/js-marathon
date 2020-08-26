const $btn = document.getElementById('btn-kick');
const $btnDoubleCick = document.getElementById('btn-double-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    demageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHpLife: renderHpLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
    renderHP: renderHP
}
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    demageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHpLife: renderHpLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
    renderHP: renderHP    
}

//Evens

$btn.addEventListener('click', function() {    
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});
$btnDoubleCick.addEventListener('click', function() {    
    character.changeHP(random(40));
    enemy.changeHP(random(40));
});

// functions

function init() {
    console.log('Start Game!');   
    character.renderHP();
    enemy.renderHP();
}
function renderHP () {
    this.renderHpLife();
    this.renderProgressbarHP();
}
function renderHpLife () {         
    this.elHP.innerText = this.demageHP + '/' + this.defaultHP;    
}
function renderProgressbarHP () {
    this.elProgressbar.style.width = this.demageHP + '%';

}
function changeHP(count) {
    if (this.demageHP < count) {
        this.demageHP = 0;
        alert('Бедний ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnDoubleCick.disabled = true;
    } else {
        this.demageHP -= count;
    }    
    this.renderHP();
}
function random (num) {    
    return Math.ceil(Math.random()*num);
}

init();


