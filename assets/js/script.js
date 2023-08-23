let log = new Log(document.querySelector('.log'));

let char = new Sorcerer("Luís");
let monster = new LittleMonster();

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
