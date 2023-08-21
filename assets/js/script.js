let log = new Log(document.querySelector('.log'));

let char = new Knight("Luís");
let monster = new LittleMonster();

//Chamando as informções essenciais dos guerreiros e seus elementos
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);
stage.start();
