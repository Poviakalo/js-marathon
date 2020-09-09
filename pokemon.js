class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}
class Pokemon extends Selectors{
    constructor({name, hp, type, selectors, attacks = [], img}) {
        super(selectors);
        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.attacks = attacks;
        this.img = img;
        this.renderHP();
    }
    changeHP = (count, cb) => {
    
        this.hp.current -= count;
        if (this.hp.current <= 0 ) {
            this.hp.current = 0;                                
        }       
        this.renderHP();
        cb && cb(count);
    }
    renderHP = () => {
        this.renderHpLife();
        this.renderProgressbarHP();
    }
    renderHpLife = () => {         
        this.elHP.innerText = this.hp.current + '/' + this.hp.total;    
    }
    renderProgressbarHP = () => {
        this.elProgressbar.style.width = this.hp.current * 100 / this.hp.total + '%';
    
    }
    gameOver = (n) => {
        if(n === 0) {
            console.log('Game Over!!!');
        }
    }
}

export default Pokemon;