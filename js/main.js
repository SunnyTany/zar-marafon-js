// players
const Player = function(name, hp, img, classElem) {
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = ['sword', 'hammer', 'mace'];
    this.classElem = classElem;
    this.attack = function() {
        return this.name + ' Fight...';
    };
}

const player1 = new Player('Garry', 100, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 'player1');
//console.log(player1);

const player2 = new Player('Billy', 95, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 'player2');
//console.log(player2);

// create new element in DOM
const createNewEement = (elTagName, elClass) => {
    let el = document.createElement(elTagName);
    el.classList.add(elClass);
    //console.dir(el);
    return el;
}

// create player
const createPlayer = ({classElem, name, hp, img}) => {
    // player 1||2
    const elPlayer = document.createElement('div');
    elPlayer.classList.add(classElem);
    // progressbar
    const elProgressBar = createNewEement('div', 'progressbar');
    elPlayer.append(elProgressBar);
    // life
    const elLife = createNewEement('div', 'life');
    elProgressBar.append(elLife);
    elLife.innerHTML = hp;
    elLife.style.width = '100%';
    //name
    const elName = createNewEement('div', 'name');
    elName.innerHTML = name;
    elProgressBar.append(elName);
    // character
    const elCharacter = createNewEement('div', 'character');
    elPlayer.append(elCharacter);
    // img
    const elImg = createNewEement('img', 'character__img');
    elImg.setAttribute("src", img);
    elCharacter.append(elImg);
    // append player in arenas
    document.querySelector('.arenas').append(elPlayer);
}

// work func 
createPlayer(player1);
createPlayer(player2);