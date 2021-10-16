// create new element in DOM
const createNewEement = (elTagName, elClass) => {
    let el = document.createElement(elTagName);
    if (elClass) {
        el.classList.add(elClass);
    }
    return el;
}
// random number
const getRandomNumber = (min, max) => {
    return Math.round(Math.random()*(max-min) + min);
}
// heroes
const heroes = [
    {
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        name: 'Scorpion'
    },
    {
        img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
        name: 'Kitana'
    },
    {
        img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
        name: 'Liukang'
    },
    {
        img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
        name: 'Sonya'
    },
    {
        img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        name: 'subzero'
    }
];
// random hero
const getRandomHero = () => {
    const hero = heroes[Math.floor(Math.random() * heroes.length)];
    const img = hero.img;
    const name = hero.name;
    return {img, name }
}
const hero1 = getRandomHero();
const hero2 = getRandomHero();
// players
const Player = function(name, img, numPlayer) {
    this.name = name;
    this.hp = 100;
    this.img = img;
    this.weapon = ['sword', 'hammer', 'mace'];
    this.classElem = `player${numPlayer}`;
    this.attack = function() {
        return this.name + ' Fight...';
    };
}
// create 2 new players
const player1 = new Player(hero1.name, hero1.img, 1);
console.log(player1);
const player2 = new Player( hero2.name, hero2.img, 2);
// create player
const createPlayer = ({classElem, name, hp, img}) => {
    const elPlayer = document.createElement('div');
    const elProgressBar = createNewEement('div', 'progressbar');
    const elLife = createNewEement('div', 'life');
    const elName = createNewEement('div', 'name');
    const elCharacter = createNewEement('div', 'character');
    const elImg = createNewEement('img');

    elPlayer.classList.add(classElem);
    elPlayer.append(elProgressBar);
    elProgressBar.append(elLife);
    elLife.style.width = hp;
    elName.innerHTML = name;
    elProgressBar.append(elName);
    elPlayer.append(elCharacter);
    elImg.setAttribute("src", img);
    elCharacter.append(elImg);
    
    return elPlayer;
}
// append players
const arenas = document.querySelector('.arenas');
arenas.append(createPlayer(player1));  
arenas.append(createPlayer(player2));
// player win
const playerWinsTitle = (name) => {
    let winTitle = document.createElement('div', 'winTitle');
    winTitle.innerText = `${name} win`;
    console.log(winTitle);
    return winTitle;
}
// change hp
const changeHP = (player) => {
    const playerLifeEl = document.querySelector(`.${player.classElem} .life`);
    player.hp -= getRandomNumber(1, 20);
    if (player.hp  <= 0) {
        player.hp = 0;
        playerLifeEl.style.width = 0;
        if(player.classElem == 'player1') {
            arenas.append(playerWinsTitle(player2.name));
        } else {
            arenas.append(playerWins(player1.name));
        }
        randomButton.disabled = true;
    } else {
        playerLifeEl.style.width = player.hp + '%';
    }
}
// random-button
const randomButton = document.querySelector('.button');
randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
});
// active func
createPlayer(player1);
createPlayer(player2);