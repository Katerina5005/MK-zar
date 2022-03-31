const player1 = {
    name: 'Manga',
    hp: 100,
    img: 'image',
    weapon: ['Кинжал', 'Мачете', 'Катана', 'Сабля'],
    attack: function atack () {
        console.log()
    }
};
console.log(player1.name + ' ' +'Fight...');

const player2 = {
    name: 'Merlin',
    hp: 85,
    img: 'image',
    weapon: ['Кинжал', 'Мачете', 'Катана', 'Сабля'],
    attack: function atack () {
        console.log()
    }
};

console.log(player2.name + ' '+ 'Fight...')

function createPlayer() {

    const $player1 = document.createElement('div');
    $player1.classList.add('.player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('.progressbar');

    const $character = document.createElement('div');
    $character.classList.add('.character')

    $player1.appendChild($progressbar);
    $player1.appendChild($character);


    const $life = document.createElement('div');
    $life.classList.add('.life');
    const $name = document.createElement('div');
    $name.classList.add('.name');

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';

    $character.appendChild($img);

    const $div = document.querySelector('.div');
    $div.appendChild($player1);
    
}
createPlayer()