

export function random (max, min = 0) {  
    let num = max - min;  
    return Math.ceil(Math.random()*num) + min;
}
export function $getElById(id) {
    return document.getElementById(id);
} 

// export function createGameOver (pokemon) {
//     const gameOver = document.createElement('div');
//             const gameOverText = document.createElement('p');
//             gameOverText.innerText = `Game Over! ${pokemon} проиграл`;
//             gameOver.classList.add('gameOver');
//             control.appendChild(gameOver);
//             gameOver.appendChild(gameOverText);  
// }

export function clickBtn (kick = 6, el) {  
    const innerText = el.innerText;
    el.innerText = `${innerText} (${kick})`;

    return function (){
        kick--;
        if( kick === 0) {
            el.disabled = true;
        } 
        el.innerText = `${innerText} (${kick})`;
        return kick;       
    }
}

export function createText (log) {
    const $p = document.createElement('p');
    $p.innerText = log;
    const $logs = document.querySelector('#logs');
    $logs.insertBefore($p, $logs.children[0]);    
}

export function generateLog(player1, player2, count) {
    const { name, hp:{current,total} } = player1;
    const { name: enemyName } = player2;

    
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. - ${count}, [ ${current} / ${total}]`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. - ${count}, [ ${current} / ${total}]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. - ${count}, [ ${current} / ${total}]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. - ${count}, [ ${current} / ${total}]`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. - ${count}, [ ${current} / ${total}]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. - ${count}, [ ${current} / ${total}]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. - ${count}, [ ${current} / ${total}]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. - ${count}, [ ${current} / ${total}]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. - ${count}, [ ${current} / ${total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. - ${count}, [ ${current} / ${total}]`
    ];

    
    return logs[random(logs.length) - 1];
}

