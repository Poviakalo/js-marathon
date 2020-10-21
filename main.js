import Pokemon from './pokemon.js';
import { random, clickBtn, createText, generateLog, $getElById } from './utils.js';

class Game {
    getPokemons = async () => {
        const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const body = await responce.json();
        // console.log(body);
        return body;
    }
    
    start = async () => {

        const pokemons = await this.getPokemons();
        console.log(pokemons);        
        const player1 = new Pokemon ({   
            ...(await pokemons), 
            selectors: 'player1',
        });
        console.log(player1);

        const player2 = new Pokemon({
            ...(await pokemons),
            selectors: "player2",
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
    };
};

const game = new Game();
game.start();

