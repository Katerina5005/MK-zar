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


    const $player1 = document.createElement('div');
    $player1.classList.add('.player1');

    const progressbar = document.createElement('div');
    progressbar.classList.add('.progressbar')

    const $div = document.querySelector('.div');
    $div.appendChild($player1);
    $div.appendChild(progressbar);
