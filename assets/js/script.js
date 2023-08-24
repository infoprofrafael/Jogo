
let char = new Knight("Luís");
// let char = new Sorcerer(Character.name);

let monster = new LittleMonster();

let log = new Log(document.querySelector('.log'));

//Chamando as informções essenciais dos guerreiros e seus elementos
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

// if (querySelector(".bar")<20%){
//     document.querySelector(".bar").innerHTML = style.background-color: red;
// }

stage.start();
