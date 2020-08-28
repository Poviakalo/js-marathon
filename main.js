function $getElById(id) {
    return document.getElementById(id);
}
const $btn = $getElById('btn-kick');
const $btnDoubleCick = $getElById('btn-double-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 150,
    demageHP: 150,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    renderHpLife: renderHpLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
    renderHP: renderHP
}
const enemy = {
    name: 'Charmander',
    defaultHP: 150,
    demageHP: 150,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    renderHpLife: renderHpLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
    renderHP: renderHP 
}

// const { renderHP: renderHPChar, changeHP: changeHPChar } = character;
// const { renderHP: renderHPEnemy, changeHP: changeHPEnemy } = enemy;
// console.log(changeHPEnemy);
// console.log(changeHPChar);

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
    this.elProgressbar.style.width = this.demageHP * 100 / this.defaultHP + '%';

}
function changeHP(count) {
    
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);


    this.demageHP -= count;
    if (this.demageHP <= 0 ) {
        this.demageHP = 0;
        alert('Бедний ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnDoubleCick.disabled = true;
    }
    
    //Add DOM           /////////////////////////////////////////////////////////

    const $p = document.createElement('p');
    $p.innerText = log;
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($p, $logs.children[0]);
    console.log(log);

    /* --------------------------------------------------------------------------- */

    this.renderHP();
}
function random (num) {    
    return Math.ceil(Math.random()*num);
}
 

function generateLog(firstPerson, secondPerson, count) {

    function diff () { 
        let res = firstPerson.demageHP - count;     
        if ( res <= 0 ) {
            return firstPerson.demageHP = 0;
        } else {
           return res;
        }
        
    } 
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. - ${count}, [ ${diff()} / ${firstPerson.defaultHP}]`
    ];

    
    return logs[random(logs.length) - 1];
}

init();


