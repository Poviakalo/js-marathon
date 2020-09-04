import Pokemon from './pokemon.js';
import { random, clickBtn, createText, generateLog, $getElById } from './utils.js';
import { pokemons } from './pokemons.js';
alert('Start Game');


const pikachu = pokemons.find(item => item.name === 'Pikachu');
const charmander = pokemons.find(item => item.name === 'Charmander');
const bulbasaur = pokemons.find(item => item.name === 'Bulbasaur');
const squirtle = pokemons.find(item => item.name === 'Squirtle');
const pidgey = pokemons.find(item => item.name === 'Pidgey');
const mew = pokemons.find(item => item.name === 'Mew');


const player1 = new Pokemon ({   
    ...pikachu, 
    selectors: 'player1',
});
console.log(player1);

const player2 = new Pokemon ({
    ...bulbasaur,
    selectors: 'player2',
});
const control = document.querySelector('.control');

player1.attacks.forEach(item => {
    console.log(item);
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const countBtn = clickBtn(item.maxCount, $btn);

    $btn.addEventListener('click', () => {

        
        console.log('click btn', $btn.innerText);        
        
        player1.changeHP(random(item.maxDamage,item.minDamage), function(count){         
            createText (generateLog(player1, player2, count));
        });       
        player2.changeHP(random(item.maxDamage,item.minDamage), function(count){         
            createText (generateLog(player1, player2, count));
        });
        // createText (generateLog(player1, player2, count));
        if ( player1.hp.current === 0 || player2.hp.current === 0) {
            const gameOver = document.createElement('div');
            const gameOverText = document.createElement('p');
            gameOverText.innerText = `Game Over!`;
            gameOver.classList.add('gameOver');
            control.appendChild(gameOver);
            gameOver.appendChild(gameOverText);     
                   
        }
        countBtn();  
              
    });
    control.appendChild($btn);    
});

const pokemon1 = pokemons.splice(random(pokemons.length-1, -1), 1)[0];
const pokemonName1 = $getElById('name-player1');
pokemonName1.innerText = pokemon1.name;

const pokemonImg1 = document.querySelector('.player1');
pokemonImg1.querySelector('img.sprite').src = pokemon1.img;


const pokemon2 = pokemons.splice(random(pokemons.length-1, -1), 1)[0];
const pokemonName2 = $getElById('name-player2');
pokemonName2.innerText = pokemon2.name;

const pokemonImg2 = document.querySelector('.player2');
pokemonImg2.querySelector('img.sprite').src = pokemon2.img;





